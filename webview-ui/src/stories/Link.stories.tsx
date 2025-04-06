import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "../components/ui/link"

const meta: Meta<typeof Link> = {
	title: "Primitives/Link",
	component: Link,
	tags: ["autodocs"],
	args: {
		children: "Click me",
	},
	argTypes: {
		href: {
			control: "text",
			description: "The URL to link to (for external links)",
		},
		onClick: {
			action: "clicked",
			description: "Click handler (for internal actions)",
		},
	},
}

export default meta

type Story = StoryObj<typeof Link>

export const ExternalLink: Story = {
	args: {
		href: "https://example.com",
		children: "External Link",
	},
}

export const InternalAction: Story = {
	args: {
		onClick: () => alert("Link clicked"),
		children: "Internal Action",
	},
}
