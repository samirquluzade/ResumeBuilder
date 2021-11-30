import React, {useEffect} from 'react';
import styled from 'styled-components';

const MainSection = (props) => {
    const Typing = () => {
        const typedTextSpan = document.querySelector(".typing");
        const txt = [
            "Create The Best Resume For Yourself Online",
            "Don't worry! We'll help you how to create your best resume",
            "Just click the button below &#8595;",
        ];
        const typeSpeed = 150;
        const eraseSpeed = 100;
        const newText = 500;
        let textArrayIndex = 0;
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < txt[textArrayIndex].length) {
                if (typedTextSpan) {
                    typedTextSpan.innerHTML += txt[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, typeSpeed);
                }
            } else {
                setTimeout(erase, newText);
            }
        }
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.innerHTML = txt[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, eraseSpeed);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= txt.length) {
                    textArrayIndex = 0;
                }
                setTimeout(typeWriter, typeSpeed + 500);
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(typeWriter, newText);
        });
    }

    useEffect(() => {
        Typing();
    },[])
    return(
        <Section>
          <Inspiration>
              <p className="typing">Create The Best <span>Resume</span><br/> For Yourself Online</p>
          </Inspiration>
        </Section>
    );
}

const Section = styled.div`
    margin: 6% 8%;
`;

const Inspiration = styled.div`
    text-align: center;
    p{
      font-size: 45px;
      color:#5b84b1ff;
    }
    p > span{
      font-weight: 700;
      color:#fc766aff;
    }
`;

export default MainSection;