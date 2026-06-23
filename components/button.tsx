import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
    variant === "primary" && "bg-gold-500 text-navy-950 hover:bg-gold-300",
    variant === "secondary" && "bg-navy-900 text-white hover:bg-navy-700",
    variant === "ghost" && "border border-navy-200 bg-white text-navy-900 hover:border-gold-500",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
