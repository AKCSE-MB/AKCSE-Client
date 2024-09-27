import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ReviewType {
  id: string;
  placeName: string;
  place_url?: string;
}

interface ReviewPlaceInfoState extends ReviewType {
  setReviewPlaceInfo: (value: ReviewType) => void;
  resetReviewPlaceInfo: () => void;
}

export const useReviewPlaceInfoStore = create<ReviewPlaceInfoState>()(
  devtools(
    persist(
      (set) => ({
        id: '',
        placeName: '',
        address: '',
        latitude: '',
        longitude: '',
        resetReviewPlaceInfo: () =>
          set({
            id: '',
            placeName: '',
          }),
        setReviewPlaceInfo: (value) =>
          set({
            id: value.id,
            placeName: value.placeName,
            place_url: value?.place_url,
          }),
      }),
      {
        name: 'review-place-info-store',
      },
    ),
  ),
);
