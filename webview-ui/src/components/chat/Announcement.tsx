import { memo } from "react"
import { Button, Link } from "@/components/ui"
import { useAppTranslation } from "@/i18n/TranslationContext"

interface AnnouncementProps {
	version: string
	hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in ClineProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
	const { t } = useAppTranslation()

	return (
		<div
			style={{
				backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
				borderRadius: "3px",
				padding: "12px 16px",
				margin: "5px 15px 5px 15px",
				position: "relative",
				flexShrink: 0,
			}}>
			<Button
				variant="ghost"
				size="icon"
				onClick={hideAnnouncement}
				title={t("chat:announcement.hideButton")}
				className="absolute top-2 right-2">
				<span className="codicon codicon-close"></span>
			</Button>
			<h2 style={{ margin: "0 0 8px" }}>{t("chat:announcement.title")}</h2>

			<p style={{ margin: "5px 0px" }}>{t("chat:announcement.description")}</p>

			<p style={{ margin: "10px 0px 0px" }}>
				<Link
					href="https://docs.roocode.com/features/boomerang-tasks"
					onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
						e.preventDefault()
						window.postMessage(
							{
								type: "action",
								action: "openExternal",
								data: { url: "https://docs.roocode.com/features/boomerang-tasks" },
							},
							"*",
						)
					}}>
					{t("chat:announcement.learnMore")}
				</Link>
			</p>
		</div>
	)
}

export default memo(Announcement)
