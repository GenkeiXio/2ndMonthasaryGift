
document.addEventListener("DOMContentLoaded", () => {
  const text = `My Dearest Bianca Alexandrine, 💗

Cheers My love for our Two months.

It may sound like such a short time to the world, but to me, it holds a million memories, emotions, and reasons why I’ve fallen so deeply in love with you.💗💗💗

From the moment we met, you brought light into places of my heart I didn’t even know were dark. You made me feel seen, understood, and loved in a way that no one else ever has. And in these past two months, you’ve become so much more than just someone I love you’ve become my home, my peace, my safe place.💗💗💗💗

I love you for all that you are, I love your voice, your good morning and goodnight messages, your moods, your deep thoughts, and your dreams. I love how you care so deeply, how you love so gently yet fiercely. I love the way your voice calms me, how your laugh lights something up in me, how your presence makes even the quietest moments feel like magic.💗💗💗💗

You’ve shown me what it means to be loved with patience, understanding, and warmth. You’ve listened to me when I needed to vent, lifted me when I was down, and stayed even though I still some flaws in me. That kind of love? It’s rare. And it’s something I’ll never take for granted.💗💗💗💗💗

I look at you and I see my future. I see the person I want to grow with, learn with, make memories with. I see the one I want beside me on both the brightest and darkest days. I want to be your forever, your permanent person just like you've become mine.💗💗💗💗💗

Happy 2nd months of love to us, my love. I hope this little surprise reminds you how much you mean to me. I may not always find the perfect words, but please know that every heartbeat, every thought, every part of me is yours.💗💗💗💗💗

Forever and always,💗💗💗
Your love, your safe place, your biggest fan.💗💗💗
Prince Louis Jaylo 💗`


  let i = 0;
  const speed = 15; // Typing speed

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("letterContent").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

