import { useLanyard } from "react-use-lanyard";
import { FC } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const Status: FC = () => {
	const { loading, status } = useLanyard({
		userId: "534165671651573781",
		socket: true,
	});

	const getColor = () => {
		switch (status?.discord_status) {
			case "online":
				return {
					status: "online",
					color: "text-pastel-green",
				};
			case "idle":
				return {
					status: "idle",
					color: "text-pastel-orange",
				};
			case "dnd":
				return {
					status: "dnd",
					color: "text-pastel-red",
				};
			default:
				return {
					status: "offline",
					color: "text-pastel-gray",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline") {
			return "offline";
		}

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return "online";

		switch (filtered.name) {
			case "Spotify":
				return "Listening to " + filtered.details;
			case "Visual Studio Code":
				return filtered.details + " in Visual Studio Code";
			case "Neovim":
				return "using Neovim";
			default:
				if (filtered.name) return `Playing ${filtered.name}`;
		}
	};

	return (
		// @ts-ignore
		<span>{getStatus()[0].toLowerCase() + getStatus()?.substring(1)}</span>
	);
};

export default Status;
