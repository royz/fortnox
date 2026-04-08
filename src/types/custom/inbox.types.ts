import type { BinaryResponse } from ".";

type FolderId =
	| "inbox_a"
	| "inbox_d"
	| "inbox_s"
	| "inbox_v"
	| "inbox_b"
	| "inbox_l"
	| "inbox_kf"
	| "inbox_o"
	| "inbox_of"
	| (string & {});

type FolderListItem = {
	"@url": string;
	Id: FolderId;
	Name: string;
};

type FileListItem = {
	"@url": string;
	Comments: string | null;
	/** Id to access the file using `"/3/inbox/<Id>"`*/
	Id: string;
	/** This id can be used to get the file using archive api (`"/3/archive?fileid=<ArchiveFileId>"`)*/
	ArchiveFileId: "f95226bd-ac72-47a0-926d-276ab5f0781d";
	/** Name of the file including extension (eg. `invoice.pdf`)*/
	Name: string;
	/** The folder id */
	Path: FolderId;
	/** File size in bytes */
	Size: number;
};

export type InboxFolderResponse = {
	Folder: {
		"@url": string;
		Id: string;
		Name: string;
		Email: string;
		Files: FileListItem[];
		Folders: FolderListItem[];
	};
};

export type InboxFileOrFolderResponse = InboxFolderResponse | BinaryResponse;
