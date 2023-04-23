// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: electra/meter/ppa_map.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type PpaMap struct {
	ConsumerDeviceID         string `protobuf:"bytes,1,opt,name=consumerDeviceID,proto3" json:"consumerDeviceID,omitempty"`
	AgreementID              string `protobuf:"bytes,2,opt,name=agreementID,proto3" json:"agreementID,omitempty"`
	AgreementActive          bool   `protobuf:"varint,3,opt,name=agreementActive,proto3" json:"agreementActive,omitempty"`
	ContractID               string `protobuf:"bytes,4,opt,name=contractID,proto3" json:"contractID,omitempty"`
	ProducerDeviceID         string `protobuf:"bytes,5,opt,name=producerDeviceID,proto3" json:"producerDeviceID,omitempty"`
	AgreementStartDate       uint64 `protobuf:"varint,6,opt,name=agreementStartDate,proto3" json:"agreementStartDate,omitempty"`
	AgreementEndDate         uint64 `protobuf:"varint,7,opt,name=agreementEndDate,proto3" json:"agreementEndDate,omitempty"`
	ContractPreferredPrice   uint64 `protobuf:"varint,8,opt,name=contractPreferredPrice,proto3" json:"contractPreferredPrice,omitempty"`
	ContractPreferredCurency string `protobuf:"bytes,9,opt,name=contractPreferredCurency,proto3" json:"contractPreferredCurency,omitempty"`
	Creator                  string `protobuf:"bytes,10,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *PpaMap) Reset()         { *m = PpaMap{} }
func (m *PpaMap) String() string { return proto.CompactTextString(m) }
func (*PpaMap) ProtoMessage()    {}
func (*PpaMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_25691ceb715506f2, []int{0}
}
func (m *PpaMap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PpaMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PpaMap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PpaMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PpaMap.Merge(m, src)
}
func (m *PpaMap) XXX_Size() int {
	return m.Size()
}
func (m *PpaMap) XXX_DiscardUnknown() {
	xxx_messageInfo_PpaMap.DiscardUnknown(m)
}

var xxx_messageInfo_PpaMap proto.InternalMessageInfo

func (m *PpaMap) GetConsumerDeviceID() string {
	if m != nil {
		return m.ConsumerDeviceID
	}
	return ""
}

func (m *PpaMap) GetAgreementID() string {
	if m != nil {
		return m.AgreementID
	}
	return ""
}

func (m *PpaMap) GetAgreementActive() bool {
	if m != nil {
		return m.AgreementActive
	}
	return false
}

func (m *PpaMap) GetContractID() string {
	if m != nil {
		return m.ContractID
	}
	return ""
}

func (m *PpaMap) GetProducerDeviceID() string {
	if m != nil {
		return m.ProducerDeviceID
	}
	return ""
}

func (m *PpaMap) GetAgreementStartDate() uint64 {
	if m != nil {
		return m.AgreementStartDate
	}
	return 0
}

func (m *PpaMap) GetAgreementEndDate() uint64 {
	if m != nil {
		return m.AgreementEndDate
	}
	return 0
}

func (m *PpaMap) GetContractPreferredPrice() uint64 {
	if m != nil {
		return m.ContractPreferredPrice
	}
	return 0
}

func (m *PpaMap) GetContractPreferredCurency() string {
	if m != nil {
		return m.ContractPreferredCurency
	}
	return ""
}

func (m *PpaMap) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*PpaMap)(nil), "electra.meter.PpaMap")
}

func init() { proto.RegisterFile("electra/meter/ppa_map.proto", fileDescriptor_25691ceb715506f2) }

var fileDescriptor_25691ceb715506f2 = []byte{
	// 312 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xbf, 0x4a, 0x33, 0x41,
	0x14, 0xc5, 0x33, 0x5f, 0xf2, 0xe5, 0xcf, 0x15, 0x51, 0x06, 0x94, 0x01, 0x61, 0x58, 0xac, 0x16,
	0x8b, 0xa4, 0x10, 0x2c, 0xec, 0xd4, 0xb5, 0x48, 0x21, 0x84, 0xd8, 0xd9, 0xc8, 0x38, 0xb9, 0x4a,
	0xc0, 0xdd, 0x19, 0x6e, 0x66, 0x83, 0x79, 0x0b, 0x9f, 0xc6, 0x67, 0xb0, 0x4c, 0x69, 0x29, 0xbb,
	0x2f, 0x22, 0x3b, 0x66, 0x97, 0x25, 0x6b, 0xca, 0xfb, 0x3b, 0x67, 0x0e, 0x67, 0xb8, 0x17, 0x4e,
	0xf0, 0x15, 0xb5, 0x23, 0x35, 0x8a, 0xd1, 0x21, 0x8d, 0xac, 0x55, 0x8f, 0xb1, 0xb2, 0x43, 0x4b,
	0xc6, 0x19, 0xbe, 0xbf, 0x11, 0x87, 0x5e, 0x3c, 0xfd, 0x68, 0x43, 0x77, 0x62, 0xd5, 0x9d, 0xb2,
	0xfc, 0x0c, 0x0e, 0xb5, 0x49, 0x16, 0x69, 0x8c, 0x14, 0xe1, 0x72, 0xae, 0x71, 0x1c, 0x09, 0x16,
	0xb0, 0x70, 0x30, 0x6d, 0x70, 0x1e, 0xc0, 0x9e, 0x7a, 0x21, 0xc4, 0x18, 0x13, 0x37, 0x8e, 0xc4,
	0x3f, 0x6f, 0xab, 0x23, 0x1e, 0xc2, 0x41, 0x35, 0x5e, 0x69, 0x37, 0x5f, 0xa2, 0x68, 0x07, 0x2c,
	0xec, 0x4f, 0xb7, 0x31, 0x97, 0x00, 0xda, 0x24, 0x8e, 0x94, 0x2e, 0xa2, 0x3a, 0x3e, 0xaa, 0x46,
	0x8a, 0x5e, 0x96, 0xcc, 0x2c, 0xd5, 0xb5, 0x5e, 0xff, 0x7f, 0x7b, 0x6d, 0x73, 0x3e, 0x04, 0x5e,
	0xc5, 0xdf, 0x3b, 0x45, 0x2e, 0x52, 0x0e, 0x45, 0x37, 0x60, 0x61, 0x67, 0xfa, 0x87, 0x52, 0x64,
	0x57, 0xf4, 0x36, 0x99, 0x79, 0x77, 0xcf, 0xbb, 0x1b, 0x9c, 0x5f, 0xc0, 0x71, 0xd9, 0x6a, 0x42,
	0xf8, 0x8c, 0x44, 0x38, 0x9b, 0xd0, 0x5c, 0xa3, 0xe8, 0xfb, 0x17, 0x3b, 0x54, 0x7e, 0x09, 0xa2,
	0xa1, 0xdc, 0xa4, 0x84, 0x89, 0x5e, 0x89, 0x81, 0xff, 0xc7, 0x4e, 0x9d, 0x0b, 0xe8, 0x69, 0x42,
	0xe5, 0x0c, 0x09, 0xf0, 0xd6, 0x72, 0xbc, 0x1e, 0x7d, 0x66, 0x92, 0xad, 0x33, 0xc9, 0xbe, 0x33,
	0xc9, 0xde, 0x73, 0xd9, 0x5a, 0xe7, 0xb2, 0xf5, 0x95, 0xcb, 0xd6, 0xc3, 0x51, 0xb9, 0xfe, 0xb7,
	0xcd, 0x01, 0xb8, 0x95, 0xc5, 0xc5, 0x53, 0xd7, 0xef, 0xff, 0xfc, 0x27, 0x00, 0x00, 0xff, 0xff,
	0x66, 0x64, 0xf5, 0x67, 0x1e, 0x02, 0x00, 0x00,
}

func (m *PpaMap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PpaMap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PpaMap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.ContractPreferredCurency) > 0 {
		i -= len(m.ContractPreferredCurency)
		copy(dAtA[i:], m.ContractPreferredCurency)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.ContractPreferredCurency)))
		i--
		dAtA[i] = 0x4a
	}
	if m.ContractPreferredPrice != 0 {
		i = encodeVarintPpaMap(dAtA, i, uint64(m.ContractPreferredPrice))
		i--
		dAtA[i] = 0x40
	}
	if m.AgreementEndDate != 0 {
		i = encodeVarintPpaMap(dAtA, i, uint64(m.AgreementEndDate))
		i--
		dAtA[i] = 0x38
	}
	if m.AgreementStartDate != 0 {
		i = encodeVarintPpaMap(dAtA, i, uint64(m.AgreementStartDate))
		i--
		dAtA[i] = 0x30
	}
	if len(m.ProducerDeviceID) > 0 {
		i -= len(m.ProducerDeviceID)
		copy(dAtA[i:], m.ProducerDeviceID)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.ProducerDeviceID)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ContractID) > 0 {
		i -= len(m.ContractID)
		copy(dAtA[i:], m.ContractID)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.ContractID)))
		i--
		dAtA[i] = 0x22
	}
	if m.AgreementActive {
		i--
		if m.AgreementActive {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x18
	}
	if len(m.AgreementID) > 0 {
		i -= len(m.AgreementID)
		copy(dAtA[i:], m.AgreementID)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.AgreementID)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ConsumerDeviceID) > 0 {
		i -= len(m.ConsumerDeviceID)
		copy(dAtA[i:], m.ConsumerDeviceID)
		i = encodeVarintPpaMap(dAtA, i, uint64(len(m.ConsumerDeviceID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPpaMap(dAtA []byte, offset int, v uint64) int {
	offset -= sovPpaMap(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *PpaMap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ConsumerDeviceID)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	l = len(m.AgreementID)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	if m.AgreementActive {
		n += 2
	}
	l = len(m.ContractID)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	l = len(m.ProducerDeviceID)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	if m.AgreementStartDate != 0 {
		n += 1 + sovPpaMap(uint64(m.AgreementStartDate))
	}
	if m.AgreementEndDate != 0 {
		n += 1 + sovPpaMap(uint64(m.AgreementEndDate))
	}
	if m.ContractPreferredPrice != 0 {
		n += 1 + sovPpaMap(uint64(m.ContractPreferredPrice))
	}
	l = len(m.ContractPreferredCurency)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPpaMap(uint64(l))
	}
	return n
}

func sovPpaMap(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPpaMap(x uint64) (n int) {
	return sovPpaMap(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PpaMap) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPpaMap
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: PpaMap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PpaMap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ConsumerDeviceID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ConsumerDeviceID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AgreementID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementActive", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.AgreementActive = bool(v != 0)
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContractID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ContractID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProducerDeviceID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ProducerDeviceID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementStartDate", wireType)
			}
			m.AgreementStartDate = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AgreementStartDate |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementEndDate", wireType)
			}
			m.AgreementEndDate = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AgreementEndDate |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContractPreferredPrice", wireType)
			}
			m.ContractPreferredPrice = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ContractPreferredPrice |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContractPreferredCurency", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ContractPreferredCurency = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPpaMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPpaMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPpaMap(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPpaMap
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPpaMap(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPpaMap
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPpaMap
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPpaMap
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPpaMap
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPpaMap
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPpaMap        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPpaMap          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPpaMap = fmt.Errorf("proto: unexpected end of group")
)