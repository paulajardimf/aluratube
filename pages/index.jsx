import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavouriteList } from "../src/components/FavouriteList";

export default function HomePage() {
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
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
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
    height: 24rem;
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
`;

function Header() {
  return (
    <StyledHeader>
      <img
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1512&q=230"
        alt="banner"
        className="foto-banner"
      />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto de perfil"
          className="foto-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video, index) => {
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
    <StyledFavouriteList>
      <h2>Favoritos</h2>
      <div className="favorite-item">
        {props.favorites.map((favorite, index) => {
          return (
            <section key={index}>
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
    </StyledFavouriteList>
  );
}
