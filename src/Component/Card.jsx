import React from "react";

export default function Card(props) {
    // 在 Card 这个函数内部，我们自定义类 html元素 的属性
    // 然后我们将其返回并输出到我们的 DOM树 中
    return (
        <div>
            <h2 className="my-style">{props.name}</h2>
            <img
                src={props.img}
                alt={props.alt}
            />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}
