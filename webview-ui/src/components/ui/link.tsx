import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * A styled link component that matches VSCode's appearance and behavior.
 * Can be used for both external links (with href) and internal actions (with onClick).
 *
 * @example
 * ```tsx
 * <Link href="https://example.com">External Link</Link>
 * <Link onClick={() => console.log('Clicked')}>Internal Action</Link>
 * ```
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/** The URL to link to (for external links) */
	href?: string
	/** Click handler (for internal actions) */
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ className, href, onClick, children, ...props }, ref) => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (onClick) {
			event.preventDefault()
			onClick(event)
		}
	}

	return (
		<a
			ref={ref}
			href={href}
			onClick={href ? undefined : handleClick}
			className={cn(
				"text-vscode-textLink-foreground hover:text-vscode-textLink-activeForeground hover:underline",
				"cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-vscode-focusBorder",
				className,
			)}
			data-slot="link"
			{...props}>
			{children}
		</a>
	)
})

Link.displayName = "Link"

export { Link }
