import React from 'react';
import {render} from 'react-dom';
import ResizableColumns from './../../src';

const App = () => (
    <div className={'demo'}>
        <div className={'topbar'}>Top Bar</div>
        <div className={'sidebar'}> Side bar</div>
        <div className={'container'}>
            <ResizableColumns>
                <div>
                    <h1>Column 1</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit
                        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <h1>Column 2</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit
                        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit
                        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  

                </div>
            </ResizableColumns>
        </div>
    </div>
);
render(<App/>, document.getElementById("root"));