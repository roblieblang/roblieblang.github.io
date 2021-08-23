import { useEfect, useState } from "react";
import ProjectsList from "../projectsList/ProjectsList";
import "./projects.scss"

export default function Projects() {
        const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured", 
            title: "Featured"
        }, 
        {
            id: "website",
            title: "Personal Website"
        },
        {
            id: "tetris",
            title: "Tetris.JS"
        },
        {
            id: "django",
            title: "Django Project"
        },
        {
            id: "pygame",
            title: "Pygame Project"
        }
    ];

    return (
        <div className="projects" id="projects">  
            <h1>Projects</h1>
            <ul>
                {list.map ((item) => (
                    <projectsList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React.JS Logo" />
                    <h3>Personal Website</h3>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Logo" />
                    <h3>Tetris.JS</h3>
                </div>
                <div className="item">
                    <img alt="Django Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgdHJhbnNmb3JtPSIiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjMDIzYjJmIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyOSw0M2gtNy4xNjY2N2MtMy45NTYsMCAtNy4xNjY2NywtMy4yMTA2NyAtNy4xNjY2NywtNy4xNjY2N3YtNy4xNjY2N2MwLC0zLjk1NiAzLjIxMDY3LC03LjE2NjY3IDcuMTY2NjcsLTcuMTY2NjdoNy4xNjY2N2MzLjk1NiwwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2Njd2Ny4xNjY2N2MwLDMuOTU2IC0zLjIxMDY3LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N3pNMTM2LjE2NjY3LDExOS42OTc2N2MwLDYuODIyNjcgLTEuNTI2NSwyOC41NDQ4MyAtMTkuNjQzODMsMzYuODAwODNjLTEuNzkxNjcsMC44MTcgLTMuODg0MzMsMC42ODA4MyAtNS42NzYsLTAuMTI5bC0xMS4wNDM4MywtNS4wMDIzM2MtMi42NDQ1LC0xLjE5NjgzIC0yLjc3MzUsLTQuNzgwMTcgLTAuMzI5NjcsLTYuMzM1MzNjMTAuNDYzMzMsLTYuNjQzNSAxNS4xOTMzMywtMTYuMTQ2NSAxNS4xOTMzMywtMjUuMzM0MTd2LTU1LjE5NzY3YzAsLTMuOTU2IDMuMjEwNjcsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N2g3LjE2NjY3YzMuOTU2LDAgNy4xNjY2NywzLjIxMDY3IDcuMTY2NjcsNy4xNjY2N3pNNzguODMzMzMsMjguNjY2Njd2MjkuODA2MTdjLTIuNDg2ODMsLTEuMDEwNSAtNy44NTQ2NywtMS4xMzk1IC0xMC40OTkxNywtMS4xMzk1Yy0xOS44OTQ2NywwIC0zOC4zMDU4Myw5LjM1OTY3IC0zOC4zMDU4MywzNS44MzMzM2MwLDMxLjY3NjY3IDI0Ljk0LDM1LjgzMzMzIDQxLjYzODMzLDM1LjgzMzMzYzUuMDM4MTcsMCAxNC45NDI1LC0wLjM3OTgzIDIyLjUyNDgzLC0xLjQ4MzVjMy41MzMxNywtMC41MTYgNi4xNDE4MywtMy41MzMxNyA2LjE0MTgzLC03LjEwMjE3di05MS43NDc2N2MwLC0zLjk1NiAtMy4yMTA2NywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N2gtNy4xNjY2N2MtMy45NTYsMCAtNy4xNjY2NywzLjIxMDY3IC03LjE2NjY3LDcuMTY2Njd6TTcxLjQ1MTY3LDExMS4zMTk4M2MtOS4zODgzMywwIC0xOC40OSwtMi45NTk4MyAtMTguNDksLTE4LjE1MzE3YzAsLTE1LjE5MzMzIDkuMTAxNjcsLTE3LjU1ODMzIDE4LjQ5LC0xNy41NTgzM2MyLjI5MzMzLDAgNC44NzMzMywwLjQzIDcuMzgxNjcsMS4wMDMzM3YzMy43MDQ4M2MtMi41MDgzMywwLjU3MzMzIC01LjA4ODMzLDEuMDAzMzMgLTcuMzgxNjcsMS4wMDMzM3oiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="/>
                    <h3>Django Project</h3>
                </div>
                <div className="item">
                    <img alt="Python Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIKdmlld0JveD0iMCAwIDIyNiAyMjYiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjI2di0yMjZoMjI2djIyNnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTEzLjIyMTI5LDIzLjU0MTY3Yy03LjMyMTQ2LDAuMDIzNTQgLTEyLjM5NzA0LDAuNjY4NTggLTE4LjUzMiwxLjcyNzk2Yy0xOC4xMTc2NywzLjE1NDU4IC0yMS40MTgyMSw5Ljc3OTIxIC0yMS40MTgyMSwyMS45ODc5MnYxOC42NTkxMmg0Mi4zNzV2OS40MTY2N2gtNDMuOTg1MjVoLTIwLjQ4MTI1Yy0xMi40MTExNywwIC0yMy4yNzMyOSw1Ljg0Nzc1IC0yNi43MTUwOCwxOS44NjQ0NmMtMy44ODkwOCwxNi4wODgzOCAtNC4wNjMyOSwyNi4xNjQyMSAwLDQyLjk2MzU0YzMuMDgzOTYsMTIuNTI4ODggOS44NzgwOCwyMS45MjIgMjIuMjkzOTYsMjEuOTIyaDE3LjEwMDY3di0yNC4wMzEzM2MwLC0xMy45NjQ5MiAxMi42NDY1OCwtMjcuNzYwMzMgMjcuMTM4ODMsLTI3Ljc2MDMzaDM0LjA2OTVjMTEuODc5MTIsMCAyMy41NDE2NywtOC43NjY5MiAyMy41NDE2NywtMjAuNjA4Mzd2LTQwLjQyNTc1YzAsLTExLjQ4MzYzIC04LjI4MTk2LC0yMC4wNzE2MiAtMTkuODU5NzUsLTIxLjk5NzMzYzAuMjg3MjEsLTAuMDI4MjUgLTguMjY3ODMsLTEuNzQ2NzkgLTE1LjUyODA4LC0xLjcxODU0ek04OS43NTQ5Niw0Mi4zNzVjMy44NjU1NCwwIDcuMDYyNSwzLjE4NzU0IDcuMDYyNSw3LjA3MTkyYzAsMy45MjIwNCAtMy4xOTY5Niw3LjA1MzA4IC03LjA2MjUsNy4wNTMwOGMtMy45NDA4NywwIC03LjA2MjUsLTMuMTI2MzMgLTcuMDYyNSwtNy4wNTMwOGMwLC0zLjg3MDI1IDMuMTIxNjMsLTcuMDcxOTIgNy4wNjI1LC03LjA3MTkyeiIgZmlsbD0iIzAyNzdiZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDguNjU4OTIsMjAyLjQ1ODMzYzcuMzIxNDYsLTAuMDIzNTQgMTIuMzk3MDQsLTAuNjY4NTggMTguNTMyLC0xLjcyNzk2YzE4LjExNzY3LC0zLjE1NDU4IDIxLjQxODIxLC05Ljc3OTIxIDIxLjQxODIxLC0yMS45ODc5MnYtMTguNjU5MTNoLTQyLjM3NXYtOS40MTY2N2g0My45ODk5NmgyMC40ODEyNWMxMi40MTExNywwIDIzLjI3MzI5LC01Ljg0Nzc1IDI2LjcxNTA4LC0xOS44NjQ0NmMzLjg4OTA4LC0xNi4wODgzNyA0LjA2MzI5LC0yNi4xNjQyMSAwLC00Mi45NjM1NGMtMy4wODg2NywtMTIuNTI4ODcgLTkuODgyNzksLTIxLjkyMiAtMjIuMjk4NjcsLTIxLjkyMmgtMTcuMTAwNjd2MjQuMDMxMzNjMCwxMy45NjQ5MiAtMTIuNjQ2NTgsMjcuNzYwMzMgLTI3LjEzODgzLDI3Ljc2MDMzaC0zNC4wNjk1Yy0xMS44NzkxMywwIC0yMy41NDE2Nyw4Ljc2NjkyIC0yMy41NDE2NywyMC42MDgzN3Y0MC40MjU3NWMwLDExLjQ4MzYyIDguMjgxOTYsMjAuMDcxNjIgMTkuODU5NzUsMjEuOTk3MzNjLTAuMjg3MjEsMC4wMjgyNSA4LjI2NzgzLDEuNzQ2NzkgMTUuNTI4MDgsMS43MTg1NHpNMTMyLjEyOTk2LDE4My42MjVjLTMuODY1NTQsMCAtNy4wNjI1LC0zLjE4NzU0IC03LjA2MjUsLTcuMDcxOTJjMCwtMy45MjIwNCAzLjE5Njk2LC03LjA1MzA4IDcuMDYyNSwtNy4wNTMwOGMzLjk0MDg4LDAgNy4wNjI1LDMuMTI2MzMgNy4wNjI1LDcuMDUzMDhjMCwzLjg3MDI1IC0zLjEyNjMzLDcuMDcxOTIgLTcuMDYyNSw3LjA3MTkyeiIgZmlsbD0iI2ZmYzEwNyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                    <h3>Pygame Project</h3>
                </div>
            </div>
        </div>
    )
}
