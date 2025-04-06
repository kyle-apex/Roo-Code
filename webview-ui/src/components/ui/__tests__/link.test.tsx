import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Link } from "../link"

describe("Link", () => {
	it("renders with href", () => {
		render(<Link href="https://example.com">Test Link</Link>)
		const link = screen.getByText("Test Link")
		expect(link).toHaveAttribute("href", "https://example.com")
		expect(link).toHaveClass("text-vscode-textLink-foreground")
		expect(link).toHaveAttribute("data-slot", "link")
	})

	it("renders with onClick", async () => {
		const onClick = jest.fn()
		render(<Link onClick={onClick}>Test Link</Link>)
		const link = screen.getByText("Test Link")
		await userEvent.click(link)
		expect(onClick).toHaveBeenCalled()
		expect(link).not.toHaveAttribute("href")
	})

	it("applies className", () => {
		render(<Link className="test-class">Test Link</Link>)
		expect(screen.getByText("Test Link")).toHaveClass("test-class")
	})

	it("forwards ref", () => {
		const ref = React.createRef<HTMLAnchorElement>()
		render(<Link ref={ref}>Test Link</Link>)
		expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
	})

	it("handles both href and onClick (prioritizes href)", async () => {
		const onClick = jest.fn()
		render(
			<Link href="https://example.com" onClick={onClick}>
				Test Link
			</Link>,
		)
		const link = screen.getByText("Test Link")
		await userEvent.click(link)
		expect(onClick).not.toHaveBeenCalled()
		expect(link).toHaveAttribute("href", "https://example.com")
	})
})
