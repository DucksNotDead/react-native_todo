//@ts-nocheck
import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg"
const Logo = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 256 256"
        {...props}
    >
        <Path
            fill="#6881f3"
            strokeMiterlimit={10}
            d="M89.6 256C40.115 256 0 215.885 0 166.4V89.6C0 40.115 40.115 0 89.6 0h76.8C215.885 0 256 40.115 256 89.6v76.8c0 49.485-40.115 89.6-89.6 89.6z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
        />
        <G
            fill="none"
            strokeMiterlimit={10}
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
        >
            <Path
                fill="#6881f3"
                d="M234.667 128c0 58.901-47.766 106.667-106.667 106.667S21.333 186.9 21.333 128 69.1 21.333 128 21.333 234.667 69.1 234.667 128z"
            />
            <Path
                fill="#eee"
                d="M213.333 128c0 47.136-38.197 85.333-85.333 85.333-47.136 0-85.333-38.197-85.333-85.333 0-47.136 38.202-85.333 85.333-85.333 47.13 0 85.333 38.202 85.333 85.333z"
            />
            <Path fill="#000" d="M122.667 58.667h10.666V128h-10.666z" />
            <Path
                fill="#000"
                d="m123.596 132.406 8.813-8.814 34.666 34.665-8.814 8.813z"
            />
            <Path
                fill="#000"
                d="M144 128c0 8.837-7.168 16-16 16-8.837 0-16-7.163-16-16s7.163-16 16-16c8.832 0 16 7.163 16 16"
            />
            <Path
                fill="#6881f3"
                d="M133.333 128a5.339 5.339 0 0 1-5.333 5.333 5.339 5.339 0 0 1-5.333-5.333c0-2.95 2.389-5.333 5.333-5.333a5.332 5.332 0 0 1 5.333 5.333"
            />
        </G>
    </Svg>
)
export default Logo
