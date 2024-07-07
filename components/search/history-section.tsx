import { Box, FlatList } from "@gluestack-ui/themed";
import SectionTitle from "../common/section-title";
import { HistoryCard } from "./history-card";

export const HistorySection = () => {
  const data: number[] = [1, 2, 3];
  return (
    <Box flexWrap="wrap">
      <Box paddingHorizontal={16}>
        <SectionTitle title="Search History" />
      </Box>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => {
          return <HistoryCard key={index} />;
        }}
      />
    </Box>
  );
};
