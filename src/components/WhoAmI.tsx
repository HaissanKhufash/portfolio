import { Javascript, Typescript, ReactLogo, ReactQueryLogo, ReactRouterLogo, NodeJS, Express, HTML5, D1G1T4L1Z4D0S } from '@components/Icons'
import '@components/WhoAmI.css'

export default function WhoAmI() {
    return (
        <main className='content'>
            <section className='home-container'>
                <article className='home-content' id='who-am-i'>
                    <div>
                        <h2>Who Am I?</h2>
                        <p>
                            A meticulous person who is really focused about the possibilities which can be provided throught ideas, actions, and deals. Because my work style is based on satisfy either the customer projects or mine in the same way. By trying to offer new possibilities and catching parties' ideas I bring a bunch of toolkits up to work adjusting myself with the environment and sitution. Always practicing ethical ways such as humbleness, solidarity, empathy, and dedication.
                        </p>
                    </div>
                    <div className='asset-container'>
                        <img src='/portfolio/bussiness_man.svg' />
                    </div>
                </article>
                <div>
                    <a href='#my-vision'>&darr;</a>
                </div>

                <article className='home-content' id='my-vision'>
                    <div>
                        <h2>What's my vision</h2>
                        <p>
                            Approach new challenges, and go ahead, I'm really interested about the pieces of projects that I can execute, I just hope give you enough confindence to take my hand and begin walking throught this road. Say that I only want success maybe is complex, because the most powerful thing on this is treat with exceptional people that confer to me the opportunity to work with their thoughs and go on.
                        </p>
                    </div>
                    <div className='asset-container'>
                        <img src='/portfolio/code_thinking.svg' />
                    </div>
                </article>
                <div>
                    <a href='#who-am-i'>&uarr;</a>
                    <a href='#offerring'>&darr;</a>
                </div>

                <article className='home-content' id='offerring'>
                    <div>
                        <h2>What could I offer to you?</h2>
                        <p>
                            Secure your ideas, I can deal with your more deep and reliable ideas to achieve our goals as a team, so smoothly go flowing throught our obstacles and get over them to find the way in wich our objective is going to arrive. I get ensured to scrutinize all your requests to satisfy the idea and achieve your dream project within a optimal time.
                        </p>
                    </div>
                    <div className='asset-container'>
                        <img src='/portfolio/security.svg' />
                    </div>
                </article>
                <div>
                    <a href='#my-vision'>&uarr;</a>
                    <a href='#skills'>&darr;</a>
                </div>

                <article id='skills'>
                    <h2>Skills - technologies</h2>
                    <p>
                        I guarantee you that I am going to apply technologies in a way in which the priority is the performance, that's why I try to be wise at the time to select the technologies, I consider three essential points when it's about this: the customer especifications, bussiness structure, and optimization. All points are reviewed and put in practice when all satisfy the expected behaviour.
                    </p>
                    <p>
                        I'm familiarized with the following technologies:
                    </p>
                    <div className='technologies'>
                        <Javascript />
                        <Typescript />
                        <ReactLogo />
                        <ReactQueryLogo />
                        <ReactRouterLogo />
                        <NodeJS />
                        <Express />
                        <HTML5 />
                    </div>
                    <p>
                        I can highlight my experience using Typescript, React and its libraries, Node.js and express.js as framework.
                    </p>
                </article>
                <div>
                    <a href='#offerring'>&uarr;</a>
                    <a href='#experience'>&darr;</a>
                </div>

                <article className='home-content' id='experience'>
                    <div>
                        <h2>Experience</h2>
                        <p>
                            I've been involved in quality projects throughout my career, such as validation systems, stats systems, authentication & authorization paradigms. All my confindence go up when D1G1T4L1Z4D0S born, this project gave me a lot of experiences that built my professional skills.
                        </p>
                        <div className='experience'>
                            <a href='https://d1g1t4l1z4d0s.github.io/d1g1evaluate' target='_blank'>
                                <D1G1T4L1Z4D0S />
                            </a>
                        </div>
                        <h5>By clicking the logo above go to the last project in which I got involved</h5>
                    </div>
                </article>
                <div>
                    <a href='#skills'>&uarr;</a>
                </div>
            </section>
        </main>
    )
}