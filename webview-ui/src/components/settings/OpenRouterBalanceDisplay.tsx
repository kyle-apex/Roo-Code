import { Link } from "@/components/ui"

import { useOpenRouterKeyInfo } from "@/components/ui/hooks/useOpenRouterKeyInfo"

export const OpenRouterBalanceDisplay = ({ apiKey, baseUrl }: { apiKey: string; baseUrl?: string }) => {
	const { data: keyInfo } = useOpenRouterKeyInfo(apiKey, baseUrl)

	if (!keyInfo || !keyInfo.limit) {
		return null
	}

	const formattedBalance = (keyInfo.limit - keyInfo.usage).toFixed(2)

	return (
		<Link href="https://openrouter.ai/settings/keys" className="text-vscode-foreground hover:underline">
			${formattedBalance}
		</Link>
	)
}
