import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const buttonGroupVariants = cva(
  [
    "inline-flex",
    "items-stretch",
    "w-fit",
    "[&>*]:relative",
    "[&>*]:focus-visible:z-10",
    "[&>*]:focus-visible:outline-none",
    "[&>*]:focus-visible:ring-ring/50",
    "[&>*]:focus-visible:ring-[3px]",
    "[&>*]:rounded-md",
    "[&_*_svg]:pointer-events-none",
    "[&_*_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      orientation: {
        horizontal: [
          "[&>*:not(:first-child)]:rounded-l-none",
          "[&>*:not(:first-child)]:border-l-0",
          "[&>*:not(:last-child)]:rounded-r-none",
        ].join(" "),
        vertical: [
          "flex-col",
          "[&>*:not(:first-child)]:rounded-t-none",
          "[&>*:not(:first-child)]:border-t-0",
          "[&>*:not(:last-child)]:rounded-b-none",
        ].join(" "),
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        [
          "inline-flex",
          "items-center",
          "gap-2",
          "h-12",
          "px-5",
          "rounded-md",
          "border",
          "bg-background",
          "text-base",
          "font-semibold",
          "whitespace-nowrap",
          "[&_svg]:pointer-events-none",
          "[&_svg:not([class*='size-'])]:size-4",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input self-stretch data-[orientation=vertical]:w-px data-[orientation=horizontal]:h-px",
        className
      )}
      {...props}
    />
  );
}

export {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
  buttonGroupVariants,
};
