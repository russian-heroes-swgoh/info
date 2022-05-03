import React from 'react';
import guildsInfo from './mock-data/guilds.json';
import logo from './assets/rh-logo.png';
import './App.css';

function App() {
    const updateDate = guildsInfo?.update_date;
    const guildsJSX = guildsInfo?.guilds?.sort((g1, g2) => g2.galactic_power - g1.galactic_power)
        .map((guildInfo) => {
            return (
                <tr key={guildInfo.name}>
                    <td className="guild-name text-start fw-bold">
                        <a href={guildInfo.link_alt} className="text-decoration-none">
                            {guildInfo.name}
                        </a>
                    </td>
                    <td className="galactic-power">
                        {guildInfo.galactic_power} кк
                    </td>
                    <td className="dstb-geo">
                        {guildInfo.dstb_geo}
                    </td>
                    <td className="lstb-geo">
                        {guildInfo.lstb_geo}
                    </td>
                    <td className="kam">
                        {guildInfo.kam && guildInfo.kam > 0
                            ? guildInfo.kam + "+"
                            : ""}
                    </td>
                    <td className="cpit-time">
                        {guildInfo.cpit_time}
                    </td>
                    <td className="hstr-time">
                        {guildInfo.hstr_time}
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
                    <img src={logo} alt="Russian Heroes Alliance" className="p-3 mx-auto w-100"/>
                </div>
            </div>
            <div className="row">
                <table className="table table-bordered text-center align-middle">
                    <thead className="align-middle">
                    <tr>
                        <th className="guild-name text-start">
                            Дата обновления: {updateDate}
                        </th>
                        <th colSpan={6}>
                            Информация о гильдиях
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
                            ГМ гильдии
                        </td>
                        <td>
                            Темное ТБ
                        </td>
                        <td>
                            Светлое ТБ
                        </td>
                        <td>
                            KAM
                        </td>
                        <td>
                            Яма 2.0
                        </td>
                        <td>
                            ГТС
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
