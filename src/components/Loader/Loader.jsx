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
        </div>
    );
};

export default Loader;
