import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( firestore: AngularFirestore ) { }

  // Ejemplo: obtener una colección
  getCollection(collectionName: string) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }

  // Ejemplo: añadir un documento
  addDocument(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }


}
