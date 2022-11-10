import ReactLoading from "react-loading";

import { Section, Article, list } from "./loaderStyles";

const Loader = () => {
    return (
        <div id="loader-div">
            <Section>
                <Article key={list[7].prop}>
                    <ReactLoading type={list[7].prop} color="#ff3333" />
                </Article>
            </Section>
            <h2 id="loader-text">Please share your position to get an accurate forecast...</h2>
        </div>
    );
};

export default Loader;
