export class Facture {
  id: number;
  date_facture: Date;
  description_facture: string;
  montant: number;
  reference_facture:string;

  constructor()
  constructor(id?: number, date?: Date, description_facture?: string, montant?: number ,reference_facture?:string) {
    this.id = id;
    this.date_facture = date;
    this.description_facture = description_facture;
    this.montant = montant;
    this.reference_facture=reference_facture;
  }
}
