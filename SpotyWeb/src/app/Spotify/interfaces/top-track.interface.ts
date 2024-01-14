export interface TopTracks {
    tracks: Track[];
}

export interface Track {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   string;
    track_number:  number;
    type:          TrackType;
    uri:           string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     AlbumID;
    images:                 Image[];
    is_playable:            boolean;
    name:                   AlbumName;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    AlbumURI;
}

export enum AlbumTypeEnum {
    Album = "album",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ArtistID;
    name:          ArtistName;
    type:          ArtistType;
    uri:           ArtistURI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistID {
    The7JdFEYD2LTYjfwxOdlVjmc = "7jdFEYD2LTYjfwxOdlVjmc",
}

export enum ArtistName {
    Kaleo = "KALEO",
}

export enum ArtistType {
    Artist = "artist",
}

export enum ArtistURI {
    SpotifyArtist7JdFEYD2LTYjfwxOdlVjmc = "spotify:artist:7jdFEYD2LTYjfwxOdlVjmc",
}

export enum AlbumID {
    The1ZuNUNl8JvYmW4W1LR2CW3 = "1ZuNUNl8jvYmW4w1lR2CW3",
    The4He4SQup02HEIQdwhZlZlk = "4he4SQup02hEIQdwhZlZlk",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum AlbumName {
    AB = "A/B",
    SurfaceSounds = "Surface Sounds",
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export enum AlbumURI {
    SpotifyAlbum1ZuNUNl8JvYmW4W1LR2CW3 = "spotify:album:1ZuNUNl8jvYmW4w1lR2CW3",
    SpotifyAlbum4He4SQup02HEIQdwhZlZlk = "spotify:album:4he4SQup02hEIQdwhZlZlk",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}
