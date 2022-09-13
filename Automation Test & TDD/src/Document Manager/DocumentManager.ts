import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";
import {Document} from "./Document";

export class DocumentManager {
     static listDocument: Document[] = [];

     constructor() {
     }

     addDocument(document: Book | Magazine | Newspaper):  void{
         DocumentManager.listDocument.push(document);
     }

     removeDocument(id: number){
         return  DocumentManager.listDocument = DocumentManager.listDocument.filter((e)=>{
               return (e.id != id);
         })
     }

    showDocument(){
         return DocumentManager.listDocument;
    }
}

