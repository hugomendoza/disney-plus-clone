import { LogoDisney } from '@/Components'

export const HomePage = () => {
  return (
    <>
      <nav>
        <LogoDisney size="small"/>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Watchlist</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
        </ul>

        <div>
          <img src="" alt="" />
          <button>Logout</button>
        </div>
      </nav>
      <main>
        hero banner
      </main>
      <section>
        <div>
          cards
        </div>
      </section>
    </>

  )
}
