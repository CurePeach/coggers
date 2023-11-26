import { ChampionName, convert } from 'data/champions';

import Aatrox from './champions/Aatrox.jpg';
import Ahri from './champions/Ahri.jpg';
import Akali from './champions/Akali.jpg';
import Akshan from './champions/Akshan.jpg';
import Alistar from './champions/Alistar.jpg';
import Amumu from './champions/Amumu.jpg';
import Anivia from './champions/Anivia.jpg';
import Annie from './champions/Annie.jpg';
import Aphelios from './champions/Aphelios.jpg';
import Ashe from './champions/Ashe.jpg';
import AurelionSol from './champions/AurelionSol.jpg';
import Azir from './champions/Azir.jpg';
import Bard from './champions/Bard.jpg';
import BelVeth from './champions/BelVeth.jpg';
import Blitzcrank from './champions/Blitzcrank.jpg';
import Brand from './champions/Brand.jpg';
import Braum from './champions/Braum.jpg';
import Briar from './champions/Briar.jpg';
import Caitlyn from './champions/Caitlyn.jpg';
import Camille from './champions/Camille.jpg';
import Cassiopeia from './champions/Cassiopeia.jpg';
import ChoGath from './champions/ChoGath.jpg';
import Corki from './champions/Corki.jpg';
import Darius from './champions/Darius.jpg';
import Diana from './champions/Diana.jpg';
import DrMundo from './champions/DrMundo.jpg';
import Draven from './champions/Draven.jpg';
import Ekko from './champions/Ekko.jpg';
import Elise from './champions/Elise.jpg';
import Evelynn from './champions/Evelynn.jpg';
import Ezreal from './champions/Ezreal.jpg';
import Fiddlesticks from './champions/Fiddlesticks.jpg';
import Fiora from './champions/Fiora.jpg';
import Fizz from './champions/Fizz.jpg';
import Galio from './champions/Galio.jpg';
import Gangplank from './champions/Gangplank.jpg';
import Garen from './champions/Garen.jpg';
import Gnar from './champions/Gnar.jpg';
import Gragas from './champions/Gragas.jpg';
import Graves from './champions/Graves.jpg';
import Gwen from './champions/Gwen.jpg';
import Hecarim from './champions/Hecarim.jpg';
import Heimerdinger from './champions/Heimerdinger.jpg';
import Illaoi from './champions/Illaoi.jpg';
import Irelia from './champions/Irelia.jpg';
import Ivern from './champions/Ivern.jpg';
import Janna from './champions/Janna.jpg';
import JarvanIV from './champions/JarvanIV.jpg';
import Jax from './champions/Jax.jpg';
import Jayce from './champions/Jayce.jpg';
import Jhin from './champions/Jhin.jpg';
import Jinx from './champions/Jinx.jpg';
import KSante from './champions/KSante.jpg';
import KaiSa from './champions/KaiSa.jpg';
import Kalista from './champions/Kalista.jpg';
import Karma from './champions/Karma.jpg';
import Karthus from './champions/Karthus.jpg';
import Kassadin from './champions/Kassadin.jpg';
import Katarina from './champions/Katarina.jpg';
import Kayle from './champions/Kayle.jpg';
import Kayn from './champions/Kayn.jpg';
import Kennen from './champions/Kennen.jpg';
import KhaZix from './champions/KhaZix.jpg';
import Kindred from './champions/Kindred.jpg';
import Kled from './champions/Kled.jpg';
import KogMaw from './champions/KogMaw.jpg';
import Leblanc from './champions/Leblanc.jpg';
import LeeSin from './champions/LeeSin.jpg';
import Leona from './champions/Leona.jpg';
import Lillia from './champions/Lillia.jpg';
import Lissandra from './champions/Lissandra.jpg';
import Lucian from './champions/Lucian.jpg';
import Lulu from './champions/Lulu.jpg';
import Lux from './champions/Lux.jpg';
import Malphite from './champions/Malphite.jpg';
import Malzahar from './champions/Malzahar.jpg';
import Maokai from './champions/Maokai.jpg';
import MasterYi from './champions/MasterYi.jpg';
import Milio from './champions/Milio.jpg';
import MissFortune from './champions/MissFortune.jpg';
import Mordekaiser from './champions/Mordekaiser.jpg';
import Morgana from './champions/Morgana.jpg';
import Naafiri from './champions/Naafiri.jpg';
import Nami from './champions/Nami.jpg';
import Nasus from './champions/Nasus.jpg';
import Nautilus from './champions/Nautilus.jpg';
import Neeko from './champions/Neeko.jpg';
import Nidalee from './champions/Nidalee.jpg';
import Nilah from './champions/Nilah.jpg';
import Nocturne from './champions/Nocturne.jpg';
import NunuWillump from './champions/NunuWillump.jpg';
import Olaf from './champions/Olaf.jpg';
import Orianna from './champions/Orianna.jpg';
import Ornn from './champions/Ornn.jpg';
import Pantheon from './champions/Pantheon.jpg';
import Poppy from './champions/Poppy.jpg';
import Pyke from './champions/Pyke.jpg';
import Qiyana from './champions/Qiyana.jpg';
import Quinn from './champions/Quinn.jpg';
import Rakan from './champions/Rakan.jpg';
import Rammus from './champions/Rammus.jpg';
import RekSai from './champions/RekSai.jpg';
import Rell from './champions/Rell.jpg';
import RenataGlasc from './champions/RenataGlasc.jpg';
import Renekton from './champions/Renekton.jpg';
import Rengar from './champions/Rengar.jpg';
import Riven from './champions/Riven.jpg';
import Rumble from './champions/Rumble.jpg';
import Ryze from './champions/Ryze.jpg';
import Samira from './champions/Samira.jpg';
import Sejuani from './champions/Sejuani.jpg';
import Senna from './champions/Senna.jpg';
import Seraphine from './champions/Seraphine.jpg';
import Sett from './champions/Sett.jpg';
import Shaco from './champions/Shaco.jpg';
import Shen from './champions/Shen.jpg';
import Shyvana from './champions/Shyvana.jpg';
import Singed from './champions/Singed.jpg';
import Sion from './champions/Sion.jpg';
import Sivir from './champions/Sivir.jpg';
import Skarner from './champions/Skarner.jpg';
import Sona from './champions/Sona.jpg';
import Soraka from './champions/Soraka.jpg';
import Swain from './champions/Swain.jpg';
import Sylas from './champions/Sylas.jpg';
import Syndra from './champions/Syndra.jpg';
import TahmKench from './champions/TahmKench.jpg';
import Taliyah from './champions/Taliyah.jpg';
import Talon from './champions/Talon.jpg';
import Taric from './champions/Taric.jpg';
import Teemo from './champions/Teemo.jpg';
import Thresh from './champions/Thresh.jpg';
import Tristana from './champions/Tristana.jpg';
import Trundle from './champions/Trundle.jpg';
import Tryndamere from './champions/Tryndamere.jpg';
import TwistedFate from './champions/TwistedFate.jpg';
import Twitch from './champions/Twitch.jpg';
import Udyr from './champions/Udyr.jpg';
import Urgot from './champions/Urgot.jpg';
import Varus from './champions/Varus.jpg';
import Vayne from './champions/Vayne.jpg';
import Veigar from './champions/Veigar.jpg';
import VelKoz from './champions/VelKoz.jpg';
import Vex from './champions/Vex.jpg';
import Vi from './champions/Vi.jpg';
import Viego from './champions/Viego.jpg';
import Viktor from './champions/Viktor.jpg';
import Vladimir from './champions/Vladimir.jpg';
import Volibear from './champions/Volibear.jpg';
import Warwick from './champions/Warwick.jpg';
import Wukong from './champions/Wukong.jpg';
import Xayah from './champions/Xayah.jpg';
import Xerath from './champions/Xerath.jpg';
import XinZhao from './champions/XinZhao.jpg';
import Yasuo from './champions/Yasuo.jpg';
import Yone from './champions/Yone.jpg';
import Yorick from './champions/Yorick.jpg';
import Yuumi from './champions/Yuumi.jpg';
import Zac from './champions/Zac.jpg';
import Zed from './champions/Zed.jpg';
import Zeri from './champions/Zeri.jpg';
import Ziggs from './champions/Ziggs.jpg';
import Zilean from './champions/Zilean.jpg';
import Zoe from './champions/Zoe.jpg';
import Zyra from './champions/Zyra.jpg';

export const getChampionAsset = (key: ChampionName) => {
  switch (key) {
    case ChampionName.Aatrox:
      return Aatrox;
    case ChampionName.Ahri:
      return Ahri;
    case ChampionName.Akali:
      return Akali;
    case ChampionName.Akshan:
      return Akshan;
    case ChampionName.Alistar:
      return Alistar;
    case ChampionName.Amumu:
      return Amumu;
    case ChampionName.Anivia:
      return Anivia;
    case ChampionName.Annie:
      return Annie;
    case ChampionName.Aphelios:
      return Aphelios;
    case ChampionName.Ashe:
      return Ashe;
    case ChampionName.AurelionSol:
      return AurelionSol;
    case ChampionName.Azir:
      return Azir;
    case ChampionName.Bard:
      return Bard;
    case ChampionName.BelVeth:
      return BelVeth;
    case ChampionName.Blitzcrank:
      return Blitzcrank;
    case ChampionName.Brand:
      return Brand;
    case ChampionName.Braum:
      return Braum;
    case ChampionName.Briar:
      return Briar;
    case ChampionName.Caitlyn:
      return Caitlyn;
    case ChampionName.Camille:
      return Camille;
    case ChampionName.Cassiopeia:
      return Cassiopeia;
    case ChampionName.ChoGath:
      return ChoGath;
    case ChampionName.Corki:
      return Corki;
    case ChampionName.Darius:
      return Darius;
    case ChampionName.Diana:
      return Diana;
    case ChampionName.DrMundo:
      return DrMundo;
    case ChampionName.Draven:
      return Draven;
    case ChampionName.Ekko:
      return Ekko;
    case ChampionName.Elise:
      return Elise;
    case ChampionName.Evelynn:
      return Evelynn;
    case ChampionName.Ezreal:
      return Ezreal;
    case ChampionName.Fiddlesticks:
      return Fiddlesticks;
    case ChampionName.Fiora:
      return Fiora;
    case ChampionName.Fizz:
      return Fizz;
    case ChampionName.Galio:
      return Galio;
    case ChampionName.Gangplank:
      return Gangplank;
    case ChampionName.Garen:
      return Garen;
    case ChampionName.Gnar:
      return Gnar;
    case ChampionName.Gragas:
      return Gragas;
    case ChampionName.Graves:
      return Graves;
    case ChampionName.Gwen:
      return Gwen;
    case ChampionName.Hecarim:
      return Hecarim;
    case ChampionName.Heimerdinger:
      return Heimerdinger;
    case ChampionName.Illaoi:
      return Illaoi;
    case ChampionName.Irelia:
      return Irelia;
    case ChampionName.Ivern:
      return Ivern;
    case ChampionName.Janna:
      return Janna;
    case ChampionName.JarvanIV:
      return JarvanIV;
    case ChampionName.Jax:
      return Jax;
    case ChampionName.Jayce:
      return Jayce;
    case ChampionName.Jhin:
      return Jhin;
    case ChampionName.Jinx:
      return Jinx;
    case ChampionName.KSante:
      return KSante;
    case ChampionName.KaiSa:
      return KaiSa;
    case ChampionName.Kalista:
      return Kalista;
    case ChampionName.Karma:
      return Karma;
    case ChampionName.Karthus:
      return Karthus;
    case ChampionName.Kassadin:
      return Kassadin;
    case ChampionName.Katarina:
      return Katarina;
    case ChampionName.Kayle:
      return Kayle;
    case ChampionName.Kayn:
      return Kayn;
    case ChampionName.Kennen:
      return Kennen;
    case ChampionName.KhaZix:
      return KhaZix;
    case ChampionName.Kindred:
      return Kindred;
    case ChampionName.Kled:
      return Kled;
    case ChampionName.KogMaw:
      return KogMaw;
    case ChampionName.Leblanc:
      return Leblanc;
    case ChampionName.LeeSin:
      return LeeSin;
    case ChampionName.Leona:
      return Leona;
    case ChampionName.Lillia:
      return Lillia;
    case ChampionName.Lissandra:
      return Lissandra;
    case ChampionName.Lucian:
      return Lucian;
    case ChampionName.Lulu:
      return Lulu;
    case ChampionName.Lux:
      return Lux;
    case ChampionName.Malphite:
      return Malphite;
    case ChampionName.Malzahar:
      return Malzahar;
    case ChampionName.Maokai:
      return Maokai;
    case ChampionName.MasterYi:
      return MasterYi;
    case ChampionName.Milio:
      return Milio;
    case ChampionName.MissFortune:
      return MissFortune;
    case ChampionName.Mordekaiser:
      return Mordekaiser;
    case ChampionName.Morgana:
      return Morgana;
    case ChampionName.Naafiri:
      return Naafiri;
    case ChampionName.Nami:
      return Nami;
    case ChampionName.Nasus:
      return Nasus;
    case ChampionName.Nautilus:
      return Nautilus;
    case ChampionName.Neeko:
      return Neeko;
    case ChampionName.Nidalee:
      return Nidalee;
    case ChampionName.Nilah:
      return Nilah;
    case ChampionName.Nocturne:
      return Nocturne;
    case ChampionName.NunuWillump:
      return NunuWillump;
    case ChampionName.Olaf:
      return Olaf;
    case ChampionName.Orianna:
      return Orianna;
    case ChampionName.Ornn:
      return Ornn;
    case ChampionName.Pantheon:
      return Pantheon;
    case ChampionName.Poppy:
      return Poppy;
    case ChampionName.Pyke:
      return Pyke;
    case ChampionName.Qiyana:
      return Qiyana;
    case ChampionName.Quinn:
      return Quinn;
    case ChampionName.Rakan:
      return Rakan;
    case ChampionName.Rammus:
      return Rammus;
    case ChampionName.RekSai:
      return RekSai;
    case ChampionName.Rell:
      return Rell;
    case ChampionName.RenataGlasc:
      return RenataGlasc;
    case ChampionName.Renekton:
      return Renekton;
    case ChampionName.Rengar:
      return Rengar;
    case ChampionName.Riven:
      return Riven;
    case ChampionName.Rumble:
      return Rumble;
    case ChampionName.Ryze:
      return Ryze;
    case ChampionName.Samira:
      return Samira;
    case ChampionName.Sejuani:
      return Sejuani;
    case ChampionName.Senna:
      return Senna;
    case ChampionName.Seraphine:
      return Seraphine;
    case ChampionName.Sett:
      return Sett;
    case ChampionName.Shaco:
      return Shaco;
    case ChampionName.Shen:
      return Shen;
    case ChampionName.Shyvana:
      return Shyvana;
    case ChampionName.Singed:
      return Singed;
    case ChampionName.Sion:
      return Sion;
    case ChampionName.Sivir:
      return Sivir;
    case ChampionName.Skarner:
      return Skarner;
    case ChampionName.Sona:
      return Sona;
    case ChampionName.Soraka:
      return Soraka;
    case ChampionName.Swain:
      return Swain;
    case ChampionName.Sylas:
      return Sylas;
    case ChampionName.Syndra:
      return Syndra;
    case ChampionName.TahmKench:
      return TahmKench;
    case ChampionName.Taliyah:
      return Taliyah;
    case ChampionName.Talon:
      return Talon;
    case ChampionName.Taric:
      return Taric;
    case ChampionName.Teemo:
      return Teemo;
    case ChampionName.Thresh:
      return Thresh;
    case ChampionName.Tristana:
      return Tristana;
    case ChampionName.Trundle:
      return Trundle;
    case ChampionName.Tryndamere:
      return Tryndamere;
    case ChampionName.TwistedFate:
      return TwistedFate;
    case ChampionName.Twitch:
      return Twitch;
    case ChampionName.Udyr:
      return Udyr;
    case ChampionName.Urgot:
      return Urgot;
    case ChampionName.Varus:
      return Varus;
    case ChampionName.Vayne:
      return Vayne;
    case ChampionName.Veigar:
      return Veigar;
    case ChampionName.VelKoz:
      return VelKoz;
    case ChampionName.Vex:
      return Vex;
    case ChampionName.Vi:
      return Vi;
    case ChampionName.Viego:
      return Viego;
    case ChampionName.Viktor:
      return Viktor;
    case ChampionName.Vladimir:
      return Vladimir;
    case ChampionName.Volibear:
      return Volibear;
    case ChampionName.Warwick:
      return Warwick;
    case ChampionName.Wukong:
      return Wukong;
    case ChampionName.Xayah:
      return Xayah;
    case ChampionName.Xerath:
      return Xerath;
    case ChampionName.XinZhao:
      return XinZhao;
    case ChampionName.Yasuo:
      return Yasuo;
    case ChampionName.Yone:
      return Yone;
    case ChampionName.Yorick:
      return Yorick;
    case ChampionName.Yuumi:
      return Yuumi;
    case ChampionName.Zac:
      return Zac;
    case ChampionName.Zed:
      return Zed;
    case ChampionName.Zeri:
      return Zeri;
    case ChampionName.Ziggs:
      return Ziggs;
    case ChampionName.Zilean:
      return Zilean;
    case ChampionName.Zoe:
      return Zoe;
    case ChampionName.Zyra:
      return Zyra;
  }
  console.error(`Cannot find asset with Champion Name ${convert(key)}`);
};
