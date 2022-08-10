import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NotFound from "./NotFound";
import Main from "./Main";
import Detail from "./Detail";
import WritePage from "./WritePage";
import CommunityPage from "./CommunityPage";
import Header from "../components/Header";
import EditPage from "./EditPage";
import DetailPage from "./DetailPage";


export default function Router(){
    return (
        <BrowserRouter>
            <Header />

            <Contents>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/edit" element={<EditPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    
                    
                </Routes>
            </Contents>

        </BrowserRouter>
    )
}

const Contents = styled.div`
    
width: 100%;
max-width: 1000px;
min-height: calc(100vh - 60px - 60px);

margin: 0 auto;
padding: 30px 10px 0;
box-sizing: border-box;

`