import { Component } from '@angular/core';

@Component({
    selector: 'biography-card',
    styleUrls: ['./biography-card.component.css'],
    templateUrl: './biography-card.component.html'
})
export class BiographyCardComponent {
    items = [
        { date: '1977', desc: 'Konkurs Malarski "Pejzaż łódzki"- BWA Łódź - wyróżnienie' },
        { date: '1979', desc: 'Wystawa Okręgu Łódzkiego ZPAP - BWA Łódź - medal ZPAP w dziale malarstwa' },
        { date: '1979', desc: 'Malarstwo i Fotografika "Łódź - portret miasta" - BWA Łódź - wyróżnienie' },
        { date: '1980', desc: 'X Festiwal Polskiego Malarstwa Współczesnego - Zamek Książąt Pomorskich Szczecin - nagroda "Kuriera Szczecińskiego"' },
        { date: '1981', desc: 'IX Ogólnopolski Konkurs Malarski im. J. Spychalskiego - BWA Poznań - dwa wyróżnienia' },
        { date: '1981', desc: 'Malarstwo i Fotografika "Łódź - portret miasta" - BWA Łódź - nagroda Muzeum Historii Miasta Łodzi' },
        { date: '1982', desc: 'XXXVI Ogólnopolski Salon Zimowy Plastyki - Muzeum Okręgowe Radom - Nagroda Główna im. Jacka Malczewskiego' },
        { date: '1983', desc: 'X Ogólnopolski Konkurs Malarski im. J. Spychalskiego - BWA Poznań - wyróżnienie' },
        { date: '1984', desc: 'XI Ogólnopolski Konkurs Malarski im. J. Spychalskiego - BWA Poznań - II nagroda' },
        { date: '1997', desc: 'I Ogólnopolski Konkurs Malarski "Triennale z martwa naturą" - BWA Sieradz - Grand Prix' },
        { date: '1998', desc: 'Wystawa malarstwa "Obraz 98" organizowana przez Fundację Polska-Japonia im. Miyauchi - Stara Kordegarda Łazienki Królewskie Warszawa - III nagroda' },
        { date: '2001', desc: 'Wystawa "Muzyka w malarstwie" - Galeria "Obok" Tychy - wyróżnienie honorowe' },
        { date: '2003', desc: 'III Ogólnopolski Konkurs Malarski "Triennale z martwą naturą" BWA Sieradz - Grand Prix' },
        { date: '2004', desc: 'Srebrny Krzyż Zasługi' },
        { date: '2005', desc: 'I Ogólnopolskie Biennale Obrazu "Artefakt" - Tower Building Łódź - II nagroda' },
        { date: '2007', desc: 'I Międzynarodowe Biennale Obrazu Quadro-Art, Muzeum Historii Miasta, Łódź - Nagroda Sztuki Użytkowej' },
        { date: '2009', desc: 'II Międzynarodowe Biennale Obrazu Quadro-Art, Galeria ZPAP "Na piętrze", Łódź - Nagroda Prezesa ZPAP' },
        { date: '2010', desc: 'Nagroda Rektora indywidualna III stopnia za osiągnięcia artystyczne' },
        { date: '2011', desc: 'VII Triennale Polskiego Rysunku Współczesnego - Lubaczów 2011 - (Grand Prix)' },
        { date: '2011', desc: 'Złoty Krzyż Zasługi' },
        { date: '2011', desc: '42. Salon Zimowy. Ciąg dalszy. - Galeria Pentagon, Radom - Nagroda Firmy Intersol' },
        { date: '2012', desc: 'Medal Komisji Edukacji Narodowej' }
    ];

    constructor(){}
}
