import { Color } from "@/types/Color";
import { Text, TouchableHighlight } from "react-native"


interface PaintContainerProps {
  color: Color;
  onChangeColorToApply: (color: Color) => void;
}

const PaintContainer: React.FC<PaintContainerProps> = ({color, onChangeColorToApply}) => {
  return (
    <TouchableHighlight onPress={() => onChangeColorToApply(color)} style={{ backgroundColor: color.hex, width: 50, height: 50, margin: 5 }}>
      <Text></Text>
    </TouchableHighlight>
  )
}

export default PaintContainer;
