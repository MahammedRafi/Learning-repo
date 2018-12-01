

export class TreeDiagramNode{
    public parentId : string | null;
    public guid : string;
    public width : number;
    public height : number;
    //public isDragOver : boolean;
    //public isDragging : boolean;
    public children : Set<string>;
    public displayName : string;
    //private _toggle : boolean;

    

}