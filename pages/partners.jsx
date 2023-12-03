
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/fjBRujB2uq">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1137027360986771546/60736a6d2bddb538140fd4db3c9ebca8.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">MiyawGamesSTUDİOS</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                     MiyawGamesSTUDİOS, kendisi bana yardım eden arkadaşımdır.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/kJKzevrUwM">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1175803576203870320/241db56dd98080a9e7f5a4e163fe688b.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">TRŞEHRİ</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                  TRŞEHRİ, kendisi bana yardım eden diğer bir arkadaşımdır.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
