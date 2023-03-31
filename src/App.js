const user = {
  name: 'Hirohiko Araki',
  function: 'Artist',
  imageUrl: 'https://i.pinimg.com/474x/95/dc/ba/95dcbabb6e6c32c04a84ee518ef07d66.jpg',
  description: "Hirohiko Araki (em japonês: 荒木 飛呂彦; hepburn: Araki Hirohiko; Sendai, 7 de junho de 1960) é um artista de mangá japonês conhecido por sua série JoJo's Bizarre Adventure, publicada pela primeira vez na revista Weekly Shōnen Jump em 1987, que até hoje já vendeu mais de 100 milhões de cópias só no Japão e que também é conhecida por suas frequentes referências ao rock ocidental e à Itália, ambos dos quais Araki supostamente gosta muito.[1] Ele fez sua estreia sob o nome Toshiyuki Araki (荒木 利之, Araki Toshiyuki) em 1980 com seu one-shot Poker Under Arms, e começou sua carreira profissional com as séries Cool Shock B.T., Baoh e The Gorgeous Irene.",
  imageSize: 250,
  books: [
    {
      name: 'Manga in Theory and Practice',
      image: 'https://m.media-amazon.com/images/I/710RLK5nwrL.jpg',
      description:"Em Hirohiko Araki's Manga Technique , Araki discute seu amor pelo mangá e como ele o vê como a 'maior' 'obra de arte completa' (obra de arte que integra música, poesia e atuação)', e revela suas técnicas secretas para desenhar e criando mangá. Partes de seu método incluem a 'Proporção de Ouro da Beleza' e métodos de contar histórias que ele aprendeu lendo Ernest Hemmingway."
    }, {
      name: "JoJo Bizarre's Adventures",
      image: "https://m.media-amazon.com/images/I/81CBCRi9xmL.jpg",
      description: 'JoJo no Kimyō na Bōken (ジョジョの奇妙な冒険? lit. (As) Bizarras Aventuras de JoJo) é um mangá japonês escrito e ilustrado por Hirohiko Araki. O mangá foi publicado pela Shueisha em sua revista Weekly Shōnen Jump entre 1987 e 2004, e a partir de 2004 pela revista seinen Ultra Jump. É o segundo mangá mais longo da Shonen Jump com 127 volumes (apenas atrás de Kochi-Kame, concluído com 200 volumes) e ainda está em produção. O que fazia dele também, até meados de 2012, o mangá mais longo sem uma adaptação para televisão.[1]. O mangá conta a história da família Joestar e suas lutas contra forças sobrenaturais. Ele é divido em 9 partes, e em cada uma há o mais recente primogênito dos Joestar, por via de regra apelidado de JoJo, fadado a seguir as tradições de sua família, "cumprindo com o seu destino" ao participar ativamente em combate a tal presença mística e derivados que assombram a sua família há séculos.'
    }
  ] 
};

export default function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <p class="strong center">{user.function}</p>
      <p class="blockText">{user.description}</p>
      <h2>Algumas de suas obras:</h2>
      <div class="books">
        <div class="book">
          <img 
            src={user.books[0].image}
            alt={'Photo of ' + user.books[0].name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
            />
          <h2>{user.books[0].name}</h2>
          <p>{user.books[0].description}</p>
        </div>
        <div class="book">
          <img 
              src={user.books[1].image}
              alt={'Photo of ' + user.books[1].name}
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
              />
            <h2>{user.books[1].name}</h2>
            <p>{user.books[1].description}</p>
        </div>
      </div>
    </div>
  );
}