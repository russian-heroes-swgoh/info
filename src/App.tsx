import React from 'react';
import guildsInfo from './mock-data/guilds.json';
import logo from './assets/rh-logo.png';
import reva from './assets/tex.charui_thirdsister.png';
import raidKrayt from './assets/raid-krayt.png'
import raidTriumvirate from './assets/raid-the-sith-triumvirate.png'
import raidPit from './assets/raid-pit.png'
import raidPoints from './assets/raid-points.png'
import {ReactComponent as StarIcon} from './assets/star-solid.svg';
import './App.css';

function getRaidLogo(raid: string | undefined) {
    if (!raid) {
        return undefined;
    }

    switch (raid) {
        case "krayt":
            return raidKrayt;
        case "triumvirate":
            return raidTriumvirate;
        case "pit" :
            return raidPit;
        default:
            return undefined;
    }
}

function App() {
    const updateDate = guildsInfo?.update_date;
    const guildsJSX = guildsInfo?.guilds?.sort((g1, g2) => g2.galactic_power - g1.galactic_power)
        .map((guildInfo) => {
            let raidLogo = getRaidLogo(guildInfo.raid);
            return (
                <tr key={guildInfo.name}>
                    <td className="guild-name text-start fw-bold">
                        <a href={guildInfo.link} className="text-decoration-none" target="_blank" rel="noreferrer">
                            {guildInfo.name}
                        </a>
                    </td>
                    <td className="galactic-power">
                        {guildInfo.galactic_power} kk
                    </td>

                    {guildInfo.rote_stars && guildInfo.rote_stars > 0
                        ? <td className="rote-tb">
                            <span className="rote-tb-stars">{guildInfo.rote_stars} <StarIcon/></span>
                            <span className="rote-tb-reva">{guildInfo.rote_reva} <img src={reva} alt="Reva"/></span>
                        </td>
                        : <td className="geo-tb">
                            <span className="lstb-geo">{guildInfo.lstb_geo} <StarIcon/></span>
                            <span className="dstb-geo">{guildInfo.dstb_geo} <StarIcon/></span>
                        </td>
                    }

                    <td className="raid">
                        <span className="raid-logo"> <img src={raidLogo} alt="Raid"/> </span>
                        {guildInfo.raid_points && guildInfo.raid_points > 0
                            ? <span className="raid-points"> <img src={raidPoints}
                                                                  alt="Raid points"/> {guildInfo.raid_points} kk+</span>
                            : null
                        }
                    </td>

                    <td className="requirements">
                        {guildInfo.requirements && guildInfo.requirements > 0
                            ? "От " + guildInfo.requirements + " кк"
                            : ""
                        }
                    </td>
                </tr>
            );
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-8 offset-lg-2">
                    <a href="https://recruit.swgoh.gg/alliance/355/russian-heroes" target="_blank" rel="noreferrer">
                        <img src={logo} alt="Russian Heroes Alliance" className="p-3 mx-auto w-100"/>
                    </a>
                </div>
            </div>
            <div className="row table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="align-middle">
                    <tr>
                        <th className="guild-name text-start">
                            Дата обновления: {updateDate}
                        </th>
                        <th colSpan={3}>
                            Информация
                        </th>
                        <th>
                            Требования
                        </th>
                    </tr>
                    <tr className="text-center fw-bold">
                        <td>
                            Название
                        </td>
                        <td>
                            ГМ
                        </td>
                        <td>
                            ТБ
                        </td>
                        <td>
                            Рейд
                        </td>
                        <td>
                            ГМ игрока
                        </td>
                    </tr>
                    </thead>
                    <tbody>{guildsJSX}</tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
