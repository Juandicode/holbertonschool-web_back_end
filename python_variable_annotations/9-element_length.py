#!/usr/bin/env python3
"""Module that defines a type-annotated function to add two floats."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Adds two float numbers and returns their sum as a float."""
    return [(i, len(i)) for i in lst]
