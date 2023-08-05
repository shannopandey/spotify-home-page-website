import mysong from './Audio/Zamana-Ho-Gaya.mp3'
let C3 = () => {
    let song=new Audio(mysong);
    let isPlaying=false;
    let handleSong=()=>{
        if(isPlaying){
            song.pause();
        }else{
            song.play();
        }
        isPlaying=!isPlaying;
    }
    return (
        <div className="third-container">
            <header>
           
                <nav className="navbar">
            
                    <div>
                        <div>&lt; </div>
                        <div> &gt; </div>
                    </div>
                    <div>
                        <ul>
                            <li>Premium</li>
                            <li>Support</li>
                            <li>Download</li>
                            <li>|</li>
                            <li>Sign up</li>
                            <button>Log in</button>
                        </ul>
                    </div>
                </nav>
            </header>

            <section className="section">
                <main>
                    <div className="upper-content">
                        <div>Focus</div>
                        <a href="https://open.spotify.com/section/0JQ5DAob0JCuWaGLU6ntFY"><div>Show all</div></a>
                        
                    </div>
                    <div className="main-cardBox">
                        <div className="cards">
                            <div className="img img1">
                                <div  onClick={handleSong}></div>
                            </div>

                            <div className="desc-content">
                                <h3>Peaceful Piano</h3>
                                <p>Peaceful piano to helps you slow down, breathe, and...</p>
                            </div>
                        </div>


                        <div className="cards">
                            <div className="img img2">
                                <div>
                                  
                                </div>
                            </div>

                            <div className="desc-content">
                                <h3>Deep Focus</h3>
                                <p>Keep calm and focus with ambient and post...</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img3">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Instrumental Study</h3>
                                <p>Focus with soft study music in the background.</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img4">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Focus Flow</h3>
                                <p>Uptempo instrumental hip hop beats.</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img5">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Workday Lounge</h3>
                                <p>Lounge and chill out music for your workday.</p>
                            </div>
                        </div>

                    </div>
                </main>

                <main>
                    <div className="upper-content">
                        <div>Spotify Playlists</div>
                        <div>Show all</div>
                    </div>
                    <div className="main-cardBox">
                        <div className="cards">
                            <div className="img img6">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Today's Top Hits</h3>
                                <p>Billie Eilish is on top of the Hottest 50!</p>
                            </div>
                        </div>


                        <div className="cards">
                            <div className="img img7">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>RapCaviar</h3>
                                <p>New music from Lil Tjay, Quavo and JT of City Girls.</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img8">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>All out 2010s</h3>
                                <p>The biggest songs of 2010s.</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img9">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Rock Classics</h3>
                                <p>Rock legends & epic songs that continue to inspire...</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img10">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>Chill Hits</h3>
                                <p>Kick back to the best new recent chill hits.</p>
                            </div>
                        </div>

                    </div>
                </main>

                <main>
                    <div className="upper-content">
                        <div>Sound of India</div>
                        <div>Show all</div>
                    </div>
                    <div className="main-cardBox">
                        <div className="cards">
                            <div className="img img11">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>The Sound of Mumbai</h3>
                                <p>The songs that define, unite and distinguish...</p>
                            </div>
                        </div>


                        <div className="cards">
                            <div className="img img12">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>The sound of kolkata</h3>
                                <p>The songs that define, unite and distinguish...</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img13">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>The sound of Delhi</h3>
                                <p>The songs that define, unite and distinguish...</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img14">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>The sound of Bengal</h3>
                                <p>The songs that define, unite and distinguish...</p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img img15">
                                <div></div>
                            </div>

                            <div className="desc-content">
                                <h3>The sound of Chennai</h3>
                                <p>The songs that define, unite and distinguish...</p>
                            </div>
                        </div>

                    </div>
                </main>

            </section>
            <footer>
                <div className="outer-footer">
                    <div className="footer-list">
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For the Record</li>
                        </ul>

                        <ul>
                            <li>Communities</li>
                            <li>For Artists</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                            <li>Spotify for Work</li>
                        </ul>
                        <ul>
                            <li>Useful links</li>
                            <li>Support</li>
                            <li>Free Mobile App</li>
                        </ul>

                    </div>


                    <div className="social-links">
                        <a href="https://www.instagram.com/spotify/"  target="_blank"><div></div></a>
                        <a href="https://twitter.com/spotify" target="_blank"><div></div></a>
                        <a href="https://www.facebook.com/Spotify" target="_blank"><div></div></a>
                    </div>
                </div>
               <div className="copy-content">
               <hr />
                <span>	&#169; 2023 Himanshu Kumar</span>
               </div>

            </footer>
        </div>
    )
}

export default C3;