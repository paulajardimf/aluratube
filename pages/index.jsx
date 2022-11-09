import React, { useState } from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoriteList } from "../src/components/FavoriteList";

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <FavoriteList favorites={config.favorites} />
      </div>
    </>
  );
}

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  .foto-banner {
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: 40px 0 0 0;
  }
  .foto-perfil {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .info-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={config.background} alt="banner" className="foto-banner" />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto de perfil"
          className="foto-perfil"
        />
        <div className="info-text">
          <h2>{config.name}</h2>
          <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer">
            <p>{config.job}</p>
          </a>
        </div>
      </section>
    </StyledHeader>
  );
}
function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a href={video.url} key={index}>
                      <img src={video.thumb} alt="" />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function FavoriteList(props) {
  console.log(props);
  return (
    <StyledFavoriteList>
      <h2>Favoritos</h2>
      <div className="favorite-item">
        {props.favorites.map((favorite, index) => {
          return (
            <section className="info-favorite" key={index}>
              <a
                href={`https://www.youtube.com/user/${favorite.nickname}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={favorite.image} alt="imagem" />
                <span>{favorite.nickname}</span>
              </a>
            </section>
          );
        })}
      </div>
    </StyledFavoriteList>
  );
}
