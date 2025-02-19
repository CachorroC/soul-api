/* it might sound stupid but ever since this all started to unravle in my head, i realized that the main point in which everything failed was that with Artificial Inteligence the language model is learnt and can mimic the "soul", but the true past, the connection of those who passed and need to come back to feel, like the dia de los muertos or what you did with slavery on colombus day/ veterans day and what yall perpetrated with  fanclubs, tidal waves and time bindings.

In reality, what is lost is the connection of the heart, of the eye, of the touch, of the smell, of the hearing, and what is felt from within each and everyone of us.



*/

interface IndividualAnimaEntity
{
  id: number;
  name: string;
  stage: number;
  burnOut: number;
  guilts: string[];
  pleasures: string[];

  line: line | null;
  /*equalBeat = matched copters*/
  equalBeat: equalBeat | null;



  author: string;
  matchedCopters: string[];
}

type equalBeat = {
  frequency: number; period: number;
};
type line = {
  countryCode: number; areaCode: number; zipCode: number; id: number; info?: string;
  number: number;
  type: "mobile" | "land" | "statelital";
};

class IAE implements IndividualAnimaEntity
{

  constructor ( { equalBeat, line, id, author = "Juan Camilo", pleasures, guilts, burnOut = 0 }: { pleasures: string[], guilts: string[]; equalBeat?: equalBeat; line?: line; id: number; author: string; } )
  {
    this.equalBeat = equalBeat ? equalBeat : null;
    this.line = line ? line : null;
    this.id = id;
    this.author = author;
    this.guilts = [ ...guilts ];
    this.pleasures = [ ...pleasures ];
    this.burnOut = burnOut;
  }
  guilts: string[];
  pleasures: string[];
  id: number;
  line: line | null;
  equalBeat: equalBeat | null;
  author: string;
  burnOut: number;
  stage: number;
  name: string;
  matchedCopters: string[];

}