import { atom } from "jotai"
import type { MelodyData } from "~/lib/melody"

/** 再生位置（曲内 ms） */
export const playbackPositionMsAtom = atom<number>(0)

/** 曲データ（MelodyData） */
export const melodyDataAtom = atom<MelodyData | null>(null)

/** ピッチデータ（PITCH_INTERVAL_MS 刻みの MIDI 配列） */
export const pitchDataAtom = atom<number[]>([])

/** 練習中かどうか */
export const isPracticingAtom = atom<boolean>(false)

/** ガイドボーカル ON（歌あり） / OFF（オケのみ） */
export const useGuideVocalAtom = atom<boolean>(false)

/** 再生音量（0.0〜1.0）※ iOS は端末の最小音量がゼロにならないことがあるため、初期値は控えめに */
export const volumeAtom = atom<number>(0.5)
