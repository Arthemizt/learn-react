import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const About = () =>{
    return(
        <div>
            <Header />
            <div className="container col-md-5">
            <h3>สวัสดีครับ</h3>
            <p className="title text-justifly mt-4 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h4 className="text-success">จาก เฮลตี้คาเฟ่</h4>
            </div>
            <Footer company="Paladin" email="paladin@gmail.com"/>
        </div>
    )
}
export default About;