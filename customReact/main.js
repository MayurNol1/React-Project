function customRender(reactE,mainC){
    const domEle = document.createElement(reactE.type);
    domEle.innerHTML = reactE.children;
    domEle.setAttribute('href',reactE.props.href);
    domEle.setAttribute('target',reactE.props.target);
    // console.log(domEle)
    mainC.appendChild(domEle)
}

const reactElement= {
    type: 'a',
    PROPY:"DSFASF",
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children: "This is custom react example"
}

const mainContent = document.getElementById("root");

customRender(reactElement,mainContent);