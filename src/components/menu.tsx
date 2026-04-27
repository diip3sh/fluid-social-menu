import type { Icon } from "@phosphor-icons/react";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { menuItems } from "../lib/constant";
import { cn } from "../lib/utils";

type MenuKey = "portfolio" | "x" | "github";

export type MenuConfig = {
    key: MenuKey;
    label: string;
    iconColorClassName: string;
    expandedWidth: number;
    labelWidth: number;
    icon: Icon;
    onClick: () => void;
};

const sharedLayoutTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1.5,
    delay: 0,
} as const;

const labelTransition = {
    duration: 0.16,
    ease: "easeOut"
} as const;

const LiquidNavigationButton = ({
    expandedKey,
    item,
    onExpand,
    onClick
}: {
    expandedKey: MenuKey | null;
    item: MenuConfig;
    onExpand: (key: MenuKey) => void;
    onClick: () => void;
}) => {
    const isExpanded = expandedKey === item.key;
    const IconComponent = item.icon;

    const handleMouseEnter = () => {
        onExpand(item.key);
    };

    return (
        <motion.button
            aria-current={isExpanded ? "page" : undefined}
            aria-expanded={isExpanded}
            aria-label={item.label}
            animate={{
                width: isExpanded ? item.expandedWidth : 48,
            }}
            className={cn(
                "flex h-12 shrink-0 items-center overflow-hidden rounded-full bg-[#f9f9f9]  shadow-[0_1px_2px_rgba(0,0,0,0.08)] p-1 outline-none ring-offset-2 ring-offset-background will-change-auto transition-colors cursor-pointer",
                isExpanded ? "" : "justify-center",
                isExpanded && item.iconColorClassName,
            )}
            onMouseEnter={handleMouseEnter}
            tabIndex={0}
            type="button"
            onClick={onClick}
        >
            <motion.span
                animate={{ rotate: isExpanded ? -4 : 0 }}
                className={cn("flex size-6 shrink-0 items-center justify-center",
                    isExpanded ? "mx-1.75" : "mx-0"
                )}
            >
                <IconComponent
                    color="currentColor"
                    size={24}
                    weight="regular"
                />
            </motion.span>
            <motion.span
                animate={{
                    opacity: isExpanded ? 1 : 0,
                    width: isExpanded ? item.labelWidth : 0,
                    x: isExpanded ? 0 : -4,
                }}
                className={cn(
                    "overflow-hidden whitespace-nowrap text-base font-semibold leading-none tracking-normal ",
                    isExpanded ? "animate-label-shine" : "",
                )}
                transition={labelTransition}
            >
                {item.label}
            </motion.span>
        </motion.button>
    );
};

export const LiquidNavigation = () => {
    const [expandedKey, setExpandedKey] = useState<MenuKey | null>(null);
    const shouldReduceMotion = useReducedMotion();

    const handleExpand = (key: MenuKey) => {
        setExpandedKey(key);
    };

    const handleShrink = () => {
        setExpandedKey(null);
    };

    return (
        <MotionConfig
            reducedMotion="user"
            transition={shouldReduceMotion ? { duration: 0 } : sharedLayoutTransition}
        >
            <nav
                aria-label="Liquid navigation"
                className="flex h-12 w-fit items-center justify-center gap-2 overflow-visible"
                onMouseLeave={handleShrink}
            >
                {menuItems.map((item) => (
                    <LiquidNavigationButton
                        expandedKey={expandedKey}
                        item={item}
                        key={item.key}
                        onExpand={handleExpand}
                        onClick={item.onClick}
                    />
                ))}
            </nav>
        </MotionConfig>
    );
};

export const MenuItem = LiquidNavigation;
