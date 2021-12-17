const input =
    "E058F79802FA00A4C1C496E5C738D860094BDF5F3ED004277DD87BB36C8EA800BDC3891D4AFA212012B64FE21801AB80021712E3CC771006A3E47B8811E4C01900043A1D41686E200DC4B8DB06C001098411C22B30085B2D6B743A6277CF719B28C9EA11AEABB6D200C9E6C6F801F493C7FE13278FFC26467C869BC802839E489C19934D935C984B88460085002F931F7D978740668A8C0139279C00D40401E8D1082318002111CE0F460500BE462F3350CD20AF339A7BB4599DA7B755B9E6B6007D25E87F3D2977543F00016A2DCB029009193D6842A754015CCAF652D6609D2F1EE27B28200C0A4B1DFCC9AC0109F82C4FC17880485E00D4C0010F8D110E118803F0DA1845A932B82E200D41E94AD7977699FED38C0169DD53B986BEE7E00A49A2CE554A73D5A6ED2F64B4804419508B00584019877142180803715224C613009E795E58FA45EA7C04C012D004E7E3FE64C27E3FE64C24FA5D331CFB024E0064DEEB49D0CC401A2004363AC6C8344008641B8351B08010882917E3D1801D2C7CA0124AE32DD3DDE86CF52BBFAAC2420099AC01496269FD65FA583A5A9ECD781A20094CE10A73F5F4EB450200D326D270021A9F8A349F7F897E85A4020CF802F238AEAA8D22D1397BF27A97FD220898600C4926CBAFCD1180087738FD353ECB7FDE94A6FBCAA0C3794875708032D8A1A0084AE378B994AE378B9A8007CD370A6F36C17C9BFCAEF18A73B2028C0A004CBC7D695773FAF1006E52539D2CFD800D24B577E1398C259802D3D23AB00540010A8611260D0002130D23645D3004A6791F22D802931FA4E46B31FA4E4686004A8014805AE0801AC050C38010600580109EC03CC200DD40031F100B166005200898A00690061860072801CE007B001573B5493004248EA553E462EC401A64EE2F6C7E23740094C952AFF031401A95A7192475CACF5E3F988E29627600E724DBA14CBE710C2C4E72302C91D12B0063F2BBFFC6A586A763B89C4DC9A0";
const VERSION_L = 3;
const TYPE_L = 3;
const LITERAL_L = 4;
const LITERAL_PREFIX_L = 1;
const TYPE_LITERAL = 4;
const LENGTH_TYPE0_L = 15;
const LENGTH_TYPE1_L = 11;
const LENGTH_INDICATOR_L = 1;

const hexToBinary = (hex) => {
    const map = new Map([
        ["0", "0000"],
        ["1", "0001"],
        ["2", "0010"],
        ["3", "0011"],
        ["4", "0100"],
        ["5", "0101"],
        ["6", "0110"],
        ["7", "0111"],
        ["8", "1000"],
        ["9", "1001"],
        ["A", "1010"],
        ["B", "1011"],
        ["C", "1100"],
        ["D", "1101"],
        ["E", "1110"],
        ["F", "1111"],
    ]);
    return hex
        .split("")
        .map((c) => map.get(c))
        .join("");
};

const binaryToDecimal = (binary) => parseInt(binary, 2);

const decodeBinary = (binary) => {
    let packets = [];
    let i = 0;
    while (i < binary.length) {
        const packet = decodePacket(binary, i);
        if (packet === null) break;

        i = packet.next;

        packets.push(packet.data);
    }
    return { next: i, data: packets };
};

const decodePacket = (binary, i) => {
    const version = binaryToDecimal(binary.substring(i, i + VERSION_L));
    i += VERSION_L;
    if (i >= binary.length) return null; //to ignore trailing zeros

    const type = binaryToDecimal(binary.substring(i, i + TYPE_L));
    i += TYPE_L;
    if (i >= binary.length) return null; //to ignore trailing zeros

    let packet;
    if (type === TYPE_LITERAL) packet = decodeLiteralPacket(binary, i);
    else packet = decodeOperationPacket(binary, i);

    if (packet === null) return null; //to ignore trailing zeros

    return {
        next: packet.next,
        data: {
            version,
            type,
            data: packet.data,
        },
    };
};

const decodeLiteralPacket = (binary, start) => {
    if (start >= binary.length) return null;

    let i = start;
    const subPackets = [];
    while (true) {
        const prefix = binary[i];
        i += LITERAL_PREFIX_L;

        subPackets.push(binary.substring(i, i + 4));
        i += LITERAL_L;

        if (prefix == "0") break;
    }
    const data = binaryToDecimal(subPackets.join(""), 2);
    return { next: i, data };
};

const decodeOperationPacket = (binary, start) => {
    if (start >= binary.length) return null;

    let i = start;
    const lengthTypeIndicator = binary[i];
    i += LENGTH_INDICATOR_L;

    if (lengthTypeIndicator == "0") {
        const subPacketLength = binaryToDecimal(
            binary.substring(i, i + LENGTH_TYPE0_L)
        );
        i += LENGTH_TYPE0_L;
        //
        const subPacketString = binary.substring(i, i + subPacketLength);
        i += subPacketLength;
        //
        const packet = decodeBinary(subPacketString);
        //
        return { next: i, data: packet.data };
    }

    if (lengthTypeIndicator == "1") {
        let subPacketCount = binaryToDecimal(
            binary.substring(i, i + LENGTH_TYPE1_L)
        );
        i += LENGTH_TYPE1_L;
        //
        const packets = [];
        while (subPacketCount-- > 0) {
            const packet = decodePacket(binary, i);
            i = packet.next;
            packets.push(packet.data);
        }
        //
        return { next: i, data: packets };
    }
};

//part1
const getVersionSum = (decodedPackets) => {
    let sum = 0;
    decodedPackets.forEach((packet) => {
        sum += packet.version;
        if (packet.type !== 4) sum += getVersionSum(packet.data);
    });
    return sum;
};

const packets = decodeBinary(hexToBinary(input));
console.log(getVersionSum(packets.data));

//part
const calculatePacket = (packet) => {
    if (packet.type === 4) return packet.data;

    let result;
    switch (packet.type) {
        case 0:
            return packet.data
                .map(calculatePacket)
                .reduce((sum, val) => sum + val, 0);
        case 1:
            return packet.data
                .map(calculatePacket)
                .reduce((product, val) => product * val, 1);
        case 2:
            return Math.min(...packet.data.map(calculatePacket));
        case 3:
            return Math.max(...packet.data.map(calculatePacket));
        case 5:
            return calculatePacket(packet.data[0]) >
                calculatePacket(packet.data[1])
                ? 1
                : 0;
        case 6:
            return calculatePacket(packet.data[0]) <
                calculatePacket(packet.data[1])
                ? 1
                : 0;
        case 7:
            return calculatePacket(packet.data[0]) ===
                calculatePacket(packet.data[1])
                ? 1
                : 0;
    }
    return result;
};

console.log(calculatePacket(packets.data[0]));
