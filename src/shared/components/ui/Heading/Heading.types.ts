import type { HTMLAttributes } from "react";

export interface HeadingProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
}