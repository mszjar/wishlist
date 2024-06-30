import { Button } from "@/components/ui/button"
import { HomeIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  return (
    <div className="home">
      <div className="home_inner">
        <h1 className="home_inner_title">
          Votre plateforme décentralisée pour créer des
          <span className="home_inner_title_colored"> listes de souhaits </span>
          et
          <span className="home_inner_title_colored"> réaliser les rêves </span>
          de vos amies et famille.
        </h1>
        <p className="home_inner_description">
          Wishblock permet de d'enregistrer, partager et suivre les souhaits de vos proches
          sur la blockchain pour une expérience sécurisée et transparente.
        </p>
        <div className="home_inner_links">
          <Link href="add" className="mr-5">
            <Button className="home_inner_links_button1 hover:bg-[#75fd38]">
              <HomeIcon className="mr-2" /> Créer une liste
            </Button>
          </Link>
          <Link href="get" className="ml-5">
            <Button className="home_inner_links_button2 hover:bg-[#75fd38]">
              <HomeIcon className="mr-2" /> Voir une liste 
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
