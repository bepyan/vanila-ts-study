declare module "@types" {

    type Node = {
        "id": string
        "name": string
        "type": "FILE" | "DIRECTORY"
        "filePath": string
        "parent": null | { "id": string }   // 어디에 속하는지 나타내는 값입니다. parent가 null이면 root에 존재하는 파일 / 디렉토리입니다.
    }
    type useNodeList = {
        nodeList: Node[]
        setNodeList: (nodeList: Node[]) => void
    }

    type FilePath = {
        name: string,
        id: string | "root";
    }
    type useFilePath = {
        filePath: FilePath[],
        setFilePath: (filePath: FilePath[]) => void
    }

    type useImgPath = {
        imgPath: string,
        setImgPath: (imgPath: string) => void
    }
}