import React from 'react';
import Story from './Story';
import "./StoryReel.css"
import isaac from "./images/isaac.JPG"
import monisola from "./images/monisola.jpg"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://tse4.mm.bing.net/th?id=OIP.215eb1FjnFZTLq1UN8zSlAHaIX&pid=Api&P=0&w=300&h=300"
                profileSrc = "https://tse3.mm.bing.net/th?id=OIP.rUC_8vwjNBY7BeILtuT7DQHaEK&pid=Api&P=0&w=307&h=173"
                title="Christiano Ronaldo"/>
            <Story
                image="https://tse3.mm.bing.net/th?id=OIP.9temUhVa6m-NTjZbsVUJowHaEU&pid=Api&P=0&w=269&h=158"
                profileSrc={isaac}
                title="Isaac Ndubuisi"/>
            <Story
                image="https://cdn-images-1.medium.com/fit/c/200/200/1*qw7Z2LZWs6Ulud7keacUuQ@2x.jpeg"
                profileSrc="https://tse2.mm.bing.net/th?id=OIP.k_xDK6CvI0JA1qEMoxooIQAAAA&pid=Api&P=0&w=300&h=300"
                title="Emmanuel Ndubuisi"/>
            <Story
                image= "https://tse1.mm.bing.net/th?id=OIP.2BW-7Nam_WmJXnKupqDXVgHaHa&pid=Api&P=0&w=300&h=300"
                profileSrc={monisola}
                title="Monisola"/>
            <Story
                image= "https://tse2.mm.bing.net/th?id=OIP.9taNDOUaATRCK6y6PqycFQHaJA&pid=Api&P=0&w=300&h=300"
                profileSrc="https://tse2.explicit.bing.net/th?id=OIP.VD1YBdb7yzX8sN5G8-uaDgHaNK&pid=Api&P=0&w=300&h=300"
                title="isokorevieno"/>

            
        </div>
    )
}

export default StoryReel

