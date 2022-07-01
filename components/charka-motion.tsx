import { motion, MotionProps } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';

export const MotionBox = motion<
    Omit<BoxProps, keyof MotionProps> & MotionProps
>(Box as any);