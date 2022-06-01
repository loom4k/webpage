import type { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import classnames from "classnames";

export const Status: FC = () => {
	const { loading, status } = useLanyard({
        userId: "534165671651573781",
        socket: true
    })

    const getColor = () => {
        switch(status?.discord_status) {
            case "online":
                return {
                    Status: "Online",
                    color: "bg-green-500",
                }
            case "idle":
                return {
                    Status: "Idle",
                    color: "bg-yellow-500",
                }
            case "dnd":
                return {
                    Status: "Busy",
                    color: "bg-red-500",
                }
            default:
                return {
                    Status: "Offline",
                    color: "bg-gray-500",
                }
        }
    }

    const getStatus = () => {
        if(loading || !status || status.discord_status == "offline")
            return "Offline"

        const filtered = status.activities
            ?.filter((activity) => activity.type !== 4)
            ?.pop()
        if(!filtered) return "Online"

        switch(filtered.name) {
            case "Spotify":
                return `Listening to ${filtered.details} on Spotify`
            case "Visual Studio Code":
                return `${filtered.details} in Visual Studio Code`
            default:
                if(filtered.name) return `Playing ${filtered.name}`
                return "Online"
        }
    }

	return (
        <>
            <span className="max-w-sm mx-auto rounded-md flex space-x-2 items-center text-center">
                I am currently
                <span
                    className={classnames(
                        "h-3",
                        "w-3",
                        "ml-2",
                        "mr-2",
                        "items-center",
                        "text-center",
                        "rounded-full",
                        getColor().color,
                    )}
                />
                {getColor().Status}
            </span>
        </>
	);
};