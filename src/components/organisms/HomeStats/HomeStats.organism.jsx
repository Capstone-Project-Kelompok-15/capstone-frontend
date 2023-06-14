import React from "react"
import { CardStats } from "../../molecules"

function HomeStats() {
    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <CardStats
                    statsNumber={9999}
                    statsTitle="Jumlah Pengguna"
                    Link="/manageUser/total"
                    hover
                    id="home-total"
                />
                <CardStats
                    statsNumber={9999}
                    statsTitle="Pengguna Online"
                    Link="/manageUser/online"
                    hover
                    id="home-online"
                />
                <CardStats
                    statsNumber={9999}
                    statsTitle="Jumlah Thread"
                    Link="/thread"
                    hover
                    id="home-thread"
                />
                <CardStats
                    statsNumber={9999}
                    statsTitle="Thread Yang Dilaporkan"
                    Link="/thread/report"
                    hover
                    id="home-report"
                />
            </div>
        </div>
    )
}

export default HomeStats
